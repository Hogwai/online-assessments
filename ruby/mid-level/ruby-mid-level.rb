def string_suffix(s)
    similarities = 0

    0.upto(s.length - 1) do |i|
        suffix = s[i..-1]
        similarity = calculate_similarity(s, suffix)
        similarities += similarity
    end

    similarities
    end

    def calculate_similarity(str1, str2)
    count = 0

    0.upto([str1.length, str2.length].min - 1) do |i|
        if str1[i] == str2[i]
        count += 1
        else
        break
        end
    end

    count
end