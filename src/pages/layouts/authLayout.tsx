import { Outlet } from 'react-router';

export function AuthLayout() {
  return (
    <div>
      <div>AuthLayout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
