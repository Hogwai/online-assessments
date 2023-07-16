using System;

public class Challenge
{
  public static int StringSuffix(string str)
  {

    int similarities = 0;
    for (int i = 0; i < str.Length; i++)
    {
        string suffix = str.Substring(i);
        int similarity = CalculateSimilarity(str, suffix);
        similarities += similarity;
    }

    return similarities;
  }

  public static int CalculateSimilarity(string str1, string str2)
  {
      int count = 0;
      for (int i = 0; i < Math.Min(str1.Length, str2.Length); i++)
      {
          if (str1[i] == str2[i])
          {
              count++;
          }
          else
          {
              break;
          }
      }
      return count;
  }
}