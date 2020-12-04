export class Book {
  private _iban: string;
  private _titre: string;

  constructor(iban: string, titre : string){
    this._iban = iban;
    this._titre = titre;
  }

  public get iban(): string {
    return this._iban;
  }
  public set iban(value: string) {
    this._iban = value;
  }
  public get titre(): string {
    return this._titre;
  }
  public set titre(value: string) {
    this._titre = value;
  }

}
