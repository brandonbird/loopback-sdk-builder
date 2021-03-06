import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { AuthGuard } from './shared/auth.guard';

const appRoutes: Routes = [
  {
    path: 'access',
    loadChildren: 'app/access/access.module#AccessModule'
  },
  {
    path: 'room',
    loadChildren: 'app/room/room.module#RoomModule'
  }
];

export const appRoutingProviders: any[] = [
  AuthGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
