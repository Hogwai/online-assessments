import java.util.ArrayList;
import java.util.List;

public class Challenge {

  public static List<String> possibilities(String signals) {
    List<String> result = new ArrayList<>();

    // Compte le nombre de signaux inconnus
    int unknownCount = 0;
    for (int i = 0; i < signals.length(); i++) {
      if (signals.charAt(i) == '?') {
        unknownCount++;
      }
    }

    // Génère toutes les combinaisons possibles en remplaçant les signaux inconnus par des points ou des tirets
    for (int i = 0; i < Math.pow(2, unknownCount); i++) {
      StringBuilder sb = new StringBuilder(signals);

      // Remplace les signaux inconnus par des points ou des tirets en fonction de la représentation binaire de i
      int count = 0; // Compte le nombre de signaux inconnus déjà traités
      for (int j = 0; j < signals.length(); j++) {
        if (sb.charAt(j) == '?') {
          int bit = (i >> (unknownCount - 1 - count)) & 1;
          sb.setCharAt(j, bit == 0 ? '.' : '-');
          count++;
        }
      }

      result.addAll(decodeMorse(sb.toString()));
    }

    return result;
  }

  private static List<String> decodeMorse(String morse) {
    List<String> possibilities = new ArrayList<>();

    String[] morseCode = {
      ".-",
      "-...",
      "-.-.",
      "-..",
      ".",
      "..-.",
      "--.",
      "....",
      "..",
      ".---",
      "-.-",
      ".-..",
      "--",
      "-.",
      "---",
      ".--.",
      "--.-",
      ".-.",
      "...",
      "-",
      "..-",
      "...-",
      ".--",
      "-..-",
      "-.--",
      "--..",
    };

    for (int i = 0; i < morseCode.length; i++) {
      if (morseCode[i].equals(morse)) {
        possibilities.add(String.valueOf((char) ('A' + i)));
      }
    }

    return possibilities;
  }
}
