public class TallyCounter {

  private int count;

  /**
   * Initializes a new TallyCounter with an initial tally of 0.
   */
  public TallyCounter() {
    count = 0;
  }

  /**
   * Increases the tally on this counter by one.
   */
  public void pressButton() {
    count++;
  }

  /**
   * Increases the tally on this counter by a given number.
   *
   * @param numTimes the amount to increase the tally by
   */
  public void pressButton(int numTimes) {
    count += numTimes;
  }

  /**
   * Reset the tally on this counter to 0.
   */
  public void reset() {
    count = 0;
  }

  /**
   * Returns the current tally on this counter.
   *
   * @return the current tally on this counter
   */
  public int getTally() {
    return count;
  }

  /**
   * Returns the string representation of this counter. This
   * is a number of '|' characters equal to the current tally
   * on this counter, but grouped into 5's, separated by a
   * single space. There is NO NEWLINE at the end of this String.
   * <p>
   * Two examples:
   * - if the tally is 3, toString() returns "|||"
   * - if the tally is 12, toString() returns "||||| ||||| ||"
   *
   * @return the string representation of this counter
   */
  public String toString() {
    StringBuilder tallyString = new StringBuilder();
    int bars = count / 5;
    int remainder = count % 5;

    for (int i = 0; i < bars; i++) {
      tallyString.append("||||| ");
    }

    for (int i = 0; i < remainder; i++) {
      tallyString.append("|");
    }

    return tallyString.toString().trim();
  }
}
