import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  template: 'Example <input type="text" [(ngModel)]="data"> <br> <ng-content></ng-content>'

})
export class ExampleComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy 
{
  @Input() data: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("1. ngOnChanges") // Component'in Input değişkenleri selector referansı üzerinden değiştiği durumlarda tetiklenir.
  }

  ngOnInit(): void {
    console.log("2. ngOnInit") // Component ilk kez oluşturulduğunda tetikleniyor. Buradaki oluşturma instance değil ilk defa oluşturulduğunda tetiklenir. Yani ilk defa componenti component olarak elde ettiğimiz zaman sayfaya yüklenecekken diyebiliriz.
  }

  ngDoCheck(): void {
    console.log("3. ngDoCheck") // Component'in güncellenmesi durumunda tetiklenir. Herhangi bir değişiklik olabilir.
  }

  ngAfterContentInit(): void {
    console.log("4. ngAfterContentInit") //Componentin içeriği ilk kez oluşturulduğunda tetiklenir. Template değil. Bunu ilerde değerlendireceğiz, <ng-content></ng-content> tamamlandığında tetiklenir.
  }

  ngAfterContentChecked(): void {
    console.log("5. ngAfterContentCheck") // Component'in içeriği güncellendiğinde tetiklenir.
  }

  ngAfterViewInit(): void {
    console.log("6. ngAfterViewInit") // Component'in viewi ilk defa oluşturulduğunda tetiklenir. Template handle edildiyse bu event tetiklenir.
  }

  ngAfterViewChecked(): void {
    console.log("7. ngAfterViewChecked") // Componentin viewi tetiklendiğinde yani view üzerinde bir değişiklik söz konusu olduğunda tetiklenir.
  }

  ngOnDestroy(): void {
    console.log("8. ngOnDestroy") //Component imha edilirken, genellikle route işlemi yapıldığında devreye girer.
  }
}
