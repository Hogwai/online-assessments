function merge_strings(string $a, string $b): string {
    $mergedString = '';
    $lengthA = strlen($a);
    $lengthB = strlen($b);
    $maxLength = max($lengthA, $lengthB);

    for ($i = 0; $i < $maxLength; $i++) {
        if ($i < $lengthA) {
            $mergedString .= $a[$i];
        }

        if ($i < $lengthB) {
            $mergedString .= $b[$i];
        }
    }

    return $mergedString;
}
