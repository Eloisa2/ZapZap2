import StackNavigator from "./components/Stack";
import { AuthProvider } from "./pages/Login/AuthContext";

export default function MyRoutes() {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>

  )
}