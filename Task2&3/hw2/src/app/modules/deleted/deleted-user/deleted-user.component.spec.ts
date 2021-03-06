import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedUserComponent } from './deleted-user.component';

describe('DeletedUserComponent', () => {
  let component: DeletedUserComponent;
  let fixture: ComponentFixture<DeletedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ("move to activate", ()=>{
    let res = component.moveToActivate({login:"vaibhav"})
    expect(res).toBe(true)
  })
});
