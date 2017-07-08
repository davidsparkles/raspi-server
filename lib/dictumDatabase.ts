import * as _ from 'lodash'

export class DictumDatabase {

  private index = 0

  public getDictum(): string {
    const dictum = dictums[this.index]
    this.index = this.index + 1
    return dictum
  }
}

const dictums: string[] = [
  'Wieviele Blondinen braucht man um einen Schokoladenkuchen zu backen?' + '\n\n'
    + 'Drei. Eine macht den Teig und die anderen schälen die Smarties.',
  'Ich hab den Zipfel in der Hand,' + '\n\n'
    + 'da wird er prall- wie interessant!' + '\n\n'
    + 'Ich streichle ihn mit sanfter Kraft,' + '\n\n'
    + 'da spritzt er schon, der weiße Saft.' + '\n\n'
    + 'Nun schwebe ich auf rosa Wolken,' + '\n\n'
    + '...das erste mal `ne Kuh gemolken!',
  'Sie: "Das Auto ist kaputt. Es hat Wasser im Vergaser."' + '\n\n'
    + 'Er: "Wasser im Vergaser? Das ist doch lächerlich!"' + '\n\n'
    + 'Sie: "Ich sag dir, das Auto hat Wasser im Vergaser!"' + '\n\n'
    + 'Er: "Du weißt doch nicht mal, was ein Vergaser ist! Ich werde das mal überprüfen. Wo ist das Auto?"' + '\n\n'
    + 'Sie: "Im Pool."',
  'Telefonieren zwei Informatiker:' + '\n\n'
    + '"Na, wie ist das Wetter bei Dir?"' + '\n\n'
    + '"Caps Lock."' + '\n\n'
    + '"Hä?"' + '\n\n'
    + '"Shift ohne Ende!"',
  'Drei Blondinen gingen spazieren. Die erste sagte: "Mein Freund hat mir einen Kugelschreiber geschenkt, obwohl ich noch gar nicht schreiben kann."'
    + ' - Die zweite sagte: "Mein Freund hat mir ein Buch geschenkt, obwohl ich noch gar nicht lesen kann."'
    + ' - Die dritte sagte: "Mein Freund hat mir einen Deoroller geschenkt, obwohl ich noch gar keinen Führerschein habe!"'
]