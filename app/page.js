import AuthWrapper from './AuthWrapper';
import HomePage from './HomePage';

export default function Home() {
  return (
    <AuthWrapper>
      <HomePage />
    </AuthWrapper>
  );
}