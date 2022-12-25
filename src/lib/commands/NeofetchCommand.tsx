import { Command } from "../Command";

export default class NeofetchCommand extends Command {
  private UPTIME = "8 hours, 10 mins";

  constructor() {
    super({ name: "neofetch" });
  }

  render(): string | JSX.Element {
    return (
      <p>
        {`
            .-/+oossssoo+/-.               biraj@ubuntu
        \`:+ssssssssssssssssss+:\`           ----------------------
      -+ssssssssssssssssssyyssss+-         Uptime: ${this.UPTIME}
    .ossssssssssssssssssdMMMNysssso.       OS: Ubuntu 22.04 x86_64
   /ssssssssssshdmmNNmmyNMMMMhssssss/      Kernel: Long Term Support (LTS) Lol <3
  +ssssssssshmydMMMMMMMNddddyssssssss+     Memory: 8 GigaByte
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    Shell: zsh
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   CPU: Intel(R) Core(TM) i5-9400 CPU @ 2.90GHz
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   Terminal: Terminal
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   Funfact: zsh in ubuntu lol
ossyNMMMNyMMhsssssssssssssshmmmhssssssso
+sssshhhyNMMNyssssssssssssyNMMMysssssss+
.ssssssssdMMMNhsssssssssshNMMMdssssssss.
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/
  +sssssssssdmydMMMMMMMMddddyssssssss+
   /ssssssssssshdmNNNNmyNMMMMhssssss/
    .ossssssssssssssssssdMMMNysssso.
      -+sssssssssssssssssyyyssss+-
        \`:+ssssssssssssssssss+:\`
            .-/+oossssoo+/-.
`}
      </p>
    );
  }
}
