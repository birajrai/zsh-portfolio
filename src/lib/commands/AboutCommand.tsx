import { Command } from "../Command";

export default class AboutCommand extends Command {
  constructor() {
    super({ name: "about" });
  }

  render(): string | JSX.Element {
    return <p>{"I'm Biraj, a full-stacked developer with over 3 years experience."}</p>;
  }
}
