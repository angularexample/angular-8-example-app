import {CommonModule} from '@angular/common';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FlexLayoutModule, MediaObserver} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MockMediaObserver} from '@app/mocks/angular/mock-flex-layout';
import {XxxHeaderComponent} from './xxx-header.component';
import {XxxSearchBoxComponent} from '@app/modules/xxx-search-box/mock-xxx-search-box.component';

describe('XxxHeaderComponent', () => {
  let component: XxxHeaderComponent;
  let fixture: ComponentFixture<XxxHeaderComponent>;
  let mediaObserver: MediaObserver;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        XxxHeaderComponent,
        XxxSearchBoxComponent
      ],
      imports: [
        CommonModule,
        FlexLayoutModule,
        MatToolbarModule
      ],
      providers: [
        {provide: MediaObserver, useClass: MockMediaObserver}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XxxHeaderComponent);
    component = fixture.componentInstance;
    mediaObserver = TestBed.get(MediaObserver);
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
