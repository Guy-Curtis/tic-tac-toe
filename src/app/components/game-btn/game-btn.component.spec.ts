import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBtnComponent } from './game-btn.component';

describe('GameBtnComponent', () => {
  let component: GameBtnComponent;
  let fixture: ComponentFixture<GameBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
