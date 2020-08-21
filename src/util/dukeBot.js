const messages = [
  "Sure, let's set up a brokerage account.",
  'What brokerage name do you want to add?',
  'Thank you. What is the account number?',
  'I would like to confirm your number to be 12345678. Is that correct?',
  'Thank you! I think I have all that I need to create your brokerage account. Should I go ahead and create one?',
  'Okay, I am working on it',
];

class DukeBot {
  constructor() {
    this.messages = messages;
    this.index = 0;
  }

  getCurrentMessage = () => this.messages[this.index];

  nextMessage() {
    if (this.index + 1 < this.messages.length) {
      this.index += 1;
    }

    return this.getCurrentMessage();
  }

  previousMessage() {
    if (this.index - 1 >= 0) {
      this.index -= 1;
    }

    return this.getCurrentMessage();
  }

  noFutureMessages() {
    return this.index === this.messages.length - 1;
  }
}

const dukeBot = new DukeBot();
export default dukeBot;
