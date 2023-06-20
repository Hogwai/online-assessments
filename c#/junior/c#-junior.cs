using System;
using System.Text;

public class Challenge
{
    public static string Accum(string s)
    {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < s.Length; i++)
        {
            char currentChar = s[i];
            int repetitionCount = i + 1;

            result.Append(char.ToUpper(currentChar));

            for (int j = 0; j < repetitionCount - 1; j++)
            {
                result.Append(char.ToLower(currentChar));
            }

            if (i < s.Length - 1)
            {
                result.Append("-");
            }
        }

        return result.ToString();
    }
}
