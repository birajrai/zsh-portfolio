import { Command } from "../Command";

export default class WhoamiCommand extends Command {
  private WHOAMI = "Biraj Kirat Dewas Rai";

  constructor() {
    super({ name: "whoami" });
  }

  render(): string | JSX.Element {
    return (
      <a target="_blank" rel="noreferrer" className="hover:underline" href="https://birajrai.tk">
        {this.WHOAMI}
      </a>
    );
  }
}
