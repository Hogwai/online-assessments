from collections import defaultdict
from itertools import zip_longest


def group_by_values_of_key(dicts, key):
    grouped = defaultdict(list)

    for e in dicts:
        grouped[e[key]].append(e)

    return tuple(grouped.values())


def sort_groups_descending(groups, dicts, key):
    return sorted(groups, key=lambda x: (-len(x), dicts.index(x[0])))


def interleave_from_groups(groups):
    result = []

    for group in zip_longest(*groups):
        for e in group:
            if e is not None:
                result.append(e)

    return result


def interleave_values(dicts, key):
    if not dicts:
        return []

    groups = group_by_values_of_key(dicts, key)
    groups = sort_groups_descending(groups, dicts, key)
    return interleave_from_groups(groups)
