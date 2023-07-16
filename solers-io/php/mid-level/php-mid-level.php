function group_by_first_index_per_val($arr, $key) {
    $first_indices = [];
    
    foreach ($arr as $i => $e) {
        if (!array_key_exists($e[$key], $first_indices)) {
            $first_indices[$e[$key]] = $i;
        }
    }
  
    return $first_indices;
}

function group_by_values_of_key($arr, $key) {
    return array_reduce($arr, function ($a, $e) use ($key) {
        $a[$e[$key]][] = $e;
        return $a;
    }, []);
}

function inplace_sort_groups_descending(&$groups, $index_by_val, $key) {
    usort($groups, function ($a, $b) use ($index_by_val, $key) {
        $cmps = [
            count($b) - count($a),
            $index_by_val[$a[0][$key]] - $index_by_val[$b[0][$key]],
        ];
      
        foreach ($cmps as $diff) {
            if ($diff !== 0) {
                return $diff;
            }
        }

        return $b[0][$key] <=> $a[0][$key];
    });
}

function interleave_from_groups($groups) {
    $zipped = array_map(null, ...$groups);
    return array_reduce($zipped, function ($acc, $group) {
        foreach ($group as $e) {
            if (!$e) {
                break;
            }

            $acc[] = $e;
        }

        return $acc;
    }, []);
}

function interleave_values($arr, $key) {
    if (empty($arr)) {
        return [];
    }
  
    $groups = group_by_values_of_key($arr, $key);
    $first_indices = group_by_first_index_per_val($arr, $key);
    inplace_sort_groups_descending($groups, $first_indices, $key);
    return interleave_from_groups($groups);
}
