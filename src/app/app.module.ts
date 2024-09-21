import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe, UpperCasePipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DisplayHelloWorldComponent } from "./components/display-hello-world/display-hello-world.component";
import { ShowhellobuttonComponent } from "./components/showhellobutton/showhellobutton.component";
import { DisplaynameComponent } from "./components/displayname/displayname.component";
import { FormsModule } from "@angular/forms";
import { CounterComponent } from "./components/counter/counter.component";
import { SimpleformComponent } from "./components/simpleform/simpleform.component";
import { UserageComponent } from "./components/userage/userage.component";
import { UsergreetingComponent } from "./components/usergreeting/usergreeting.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { TextlengthComponent } from "./components/textlength/textlength.component";
import { CurrencyconverterComponent } from "./components/currencyconverter/currencyconverter.component";
import { EvenoddcheckerComponent } from "./components/evenoddchecker/evenoddchecker.component";
import { WordreverserComponent } from "./components/wordreverser/wordreverser.component";
import { ShowdateComponent } from "./components/showdate/showdate.component";
import { ShowusernameComponent } from "./components/showusername/showusername.component";
import { MultiplicationtableComponent } from "./components/multiplicationtable/multiplicationtable.component";
import { SimpleloginComponent } from "./components/simplelogin/simplelogin.component";
import { FahrenheittocelsiusComponent } from "./components/fahrenheittocelsius/fahrenheittocelsius.component";
import { BookmarklistComponent } from "./components/bookmarklist/bookmarklist.component";
import { CharactercounterComponent } from "./components/charactercounter/charactercounter.component";
import { PalindromecheckerComponent } from "./components/palindromechecker/palindromechecker.component";
import { TemperatureconverterComponent } from "./components/temperatureconverter/temperatureconverter.component";
import { ShoppinglistComponent } from "./components/shoppinglist/shoppinglist.component";
import { FactorialcalculatorComponent } from "./components/factorialcalculator/factorialcalculator.component";
import { TodomanagerComponent } from "./components/todomanager/todomanager.component";
import { GuessnumbergameComponent } from "./components/guessnumbergame/guessnumbergame.component";
import { WordcounterComponent } from "./components/wordcounter/wordcounter.component";
import { RandomnumbergeneratorComponent } from "./components/randomnumbergenerator/randomnumbergenerator.component";
import { MultiplicationcheckerComponent } from "./components/multiplicationchecker/multiplicationchecker.component";
import { UppercaseconverterComponent } from "./components/uppercaseconverter/uppercaseconverter.component";
import { WordshufflerComponent } from "./components/wordshuffler/wordshuffler.component";
import { BmisolverComponent } from "./components/bmisolver/bmisolver.component";
import { UsernamevalidatorComponent } from "./components/usernamevalidator/usernamevalidator.component";
import { InterestcalculatorComponent } from "./components/interestcalculator/interestcalculator.component";
import { CompoundinterestcalculatorComponent } from "./components/compoundinterestcalculator/compoundinterestcalculator.component";
import { FibonaccigeneratorComponent } from "./components/fibonaccigenerator/fibonaccigenerator.component";
import { OddsumcalculatorComponent } from "./components/oddsumcalculator/oddsumcalculator.component";
import { CurrencyformatterComponent } from "./components/currencyformatter/currencyformatter.component";
import { RandomquotedisplayComponent } from "./components/randomquotedisplay/randomquotedisplay.component";
import { UppercasegreetingComponent } from "./components/uppercasegreeting/uppercasegreeting.component";
import { DivisiblecheckerComponent } from "./components/divisiblechecker/divisiblechecker.component";
import { StopwatchComponent } from "./components/stopwatch/stopwatch.component";
import { CountdowntimerComponent } from "./components/countdowntimer/countdowntimer.component";
import { PasswordstrengthcheckerComponent } from "./components/passwordstrengthchecker/passwordstrengthchecker.component";
import { UnitconverterComponent } from "./components/unitconverter/unitconverter.component";
import { SimplevotingComponent } from "./components/simplevoting/simplevoting.component";
import { DicerollerComponent } from "./components/diceroller/diceroller.component";
import { RandomcolorComponent } from "./components/randomcolor/randomcolor.component";
import { LettercomparisonComponent } from "./components/lettercomparison/lettercomparison.component";
import { PalindromenumberComponent } from "./componetns/palindromenumber/palindromenumber.component";
import { DaysuntilbirthdayComponent } from "./components/daysuntilbirthday/daysuntilbirthday.component";


const routes: Routes = [
    {path: '',  component: DisplayHelloWorldComponent},
    {path: 'showhellobutton', component: ShowhellobuttonComponent},
    {path: 'displayname', component: DisplaynameComponent},
    {path: 'counter', component: CounterComponent},
    {path: 'simpleform', component: SimpleformComponent},
    {path: 'userage', component: UserageComponent},
    {path: 'usergreeting', component: UsergreetingComponent},
    {path: 'calculator', component: CalculatorComponent},
    {path: 'textlength', component: TextlengthComponent},
    {path: 'currencyconverter', component: CurrencyconverterComponent},
    {path: 'evenoddchecker', component: EvenoddcheckerComponent},
    {path: 'wordreverser', component: WordreverserComponent},
    {path: 'showdate', component: ShowdateComponent},
    {path: 'showusername', component: ShowusernameComponent},
    {path: 'multiplicationtable', component: MultiplicationtableComponent},
    {path: 'simplelogin', component: SimpleloginComponent},
    {path: 'fahrenheittocelsius', component: FahrenheittocelsiusComponent},
    {path: 'bookmarklist', component: BookmarklistComponent},
    {path: 'charactercounter', component: CharactercounterComponent},
    {path: 'palindromechecker', component: PalindromecheckerComponent},
    {path: 'temperatureconverter', component: TemperatureconverterComponent},
    {path: 'shoppinglist', component: ShoppinglistComponent},
    {path: 'factorialcalculator', component: FactorialcalculatorComponent},
    {path: 'todomanager', component: TodomanagerComponent},
    {path: 'guessnumbergame', component: GuessnumbergameComponent},
    {path: 'wordcounter', component: WordcounterComponent},
    {path: 'randomnumbergenerator', component: RandomnumbergeneratorComponent},
    {path: 'multiplicationchecker', component: MultiplicationcheckerComponent},
    {path: 'uppercaseconverter', component: UppercaseconverterComponent},
    {path: 'wordshuffler', component: WordshufflerComponent},
    {path: 'bmisolver', component: BmisolverComponent},
    {path: 'usernamevalidator', component: UsernamevalidatorComponent},
    {path: 'interestcalculator', component: InterestcalculatorComponent},
    {path: 'compoundinterestcalculator', component: CompoundinterestcalculatorComponent},
    {path: 'fibonaccigenerator', component: FibonaccigeneratorComponent},
    {path: 'oddsumcalculator', component: OddsumcalculatorComponent},
    {path: 'currencyformatter', component: CurrencyformatterComponent},
    {path: 'randomquotedisplay', component: RandomquotedisplayComponent},
    {path: 'uppercasegreeting', component: UppercasegreetingComponent},
    {path: 'divisiblechecker', component: DivisiblecheckerComponent},
    {path: 'stopwatch', component: StopwatchComponent},
    {path: 'countdowntimer', component: CountdowntimerComponent},
    {path: 'passwordstrengthchecker', component: PasswordstrengthcheckerComponent},
    {path: 'unitconverter', component: UnitconverterComponent},
    {path: 'simplevoting', component: SimplevotingComponent},
    {path: 'diceroller', component: DicerollerComponent},
    {path: 'randomcolor', component: RandomcolorComponent},
    {path: 'lettercomparison', component: LettercomparisonComponent},
    {path: 'palindromenumber', component: PalindromenumberComponent},
    {path: 'daysuntilbirthday', component: DaysuntilbirthdayComponent},
]

@NgModule ({
    imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
    ],

    declarations: [
        AppComponent,
        DisplayHelloWorldComponent,
        ShowhellobuttonComponent,
        DisplaynameComponent,
        CounterComponent,
        SimpleformComponent,
        UserageComponent,
        UsergreetingComponent,
        CalculatorComponent,
        TextlengthComponent,
        CurrencyconverterComponent,
        EvenoddcheckerComponent,
        WordreverserComponent,
        ShowdateComponent,
        ShowusernameComponent,
        MultiplicationtableComponent,
        SimpleloginComponent,
        FahrenheittocelsiusComponent,
        BookmarklistComponent,
        CharactercounterComponent,
        PalindromecheckerComponent,
        TemperatureconverterComponent,
        ShoppinglistComponent,
        FactorialcalculatorComponent,
        TodomanagerComponent,
        GuessnumbergameComponent,
        WordcounterComponent,
        RandomnumbergeneratorComponent,
        MultiplicationcheckerComponent,
        UppercaseconverterComponent,
        WordshufflerComponent,
        BmisolverComponent,
        UsernamevalidatorComponent,
        InterestcalculatorComponent,
        CompoundinterestcalculatorComponent,
        FibonaccigeneratorComponent,
        OddsumcalculatorComponent,
        CurrencyformatterComponent,
        RandomquotedisplayComponent,
        UppercasegreetingComponent,
        DivisiblecheckerComponent,
        StopwatchComponent,
        CountdowntimerComponent,
        PasswordstrengthcheckerComponent,
        UnitconverterComponent,
        SimplevotingComponent,
        DicerollerComponent,
        RandomcolorComponent,
        LettercomparisonComponent,
        PalindromenumberComponent,
        DaysuntilbirthdayComponent,
    ],

    providers: [

    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}