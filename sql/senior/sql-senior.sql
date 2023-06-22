WITH monthly_counts AS (
    SELECT
        TO_CHAR(DATE_TRUNC('month', created_at), 'YYYY-MM-DD')::DATE AS date,
        COUNT(*) AS count
    FROM
        posts
    GROUP BY
        date
    ORDER BY
        date
),
lagged_counts AS (
    SELECT
        date,
        count,
        LAG(count) OVER (ORDER BY date) AS prev_count
    FROM
        monthly_counts
)
SELECT
    mc.date,
    mc.count,
    CASE
        WHEN lc.prev_count IS NULL THEN NULL
        ELSE ROUND(((mc.count::numeric - lc.prev_count::numeric) / lc.prev_count::numeric) * 100.0, 1)::text || '%'
    END AS percent_growth
FROM
    monthly_counts mc
LEFT JOIN
    lagged_counts lc ON mc.date = lc.date
ORDER BY
    mc.date;
