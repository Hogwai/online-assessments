fn string_suffix(s: &str) -> usize {
    let mut similarities = 0;

    for i in 0..s.len() {
        let suffix = &s[i..];
        let similarity = calculate_similarity(s, suffix);
        similarities += similarity;
    }
    similarities
}

fn calculate_similarity(str1: &str, str2: &str) -> usize {
    let mut count = 0;

    for (_i, (c1, c2)) in str1.chars().zip(str2.chars()).enumerate() {
        if c1 == c2 {
            count += 1;
        } else {
            break;
        }
    }
    count
}