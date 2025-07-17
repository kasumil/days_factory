import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context";
import { authService } from "../services/authService";

// Context를 사용하는 기본 useAuth hook
export function useAuth() {
  return useContext(AuthContext);
}

// 인증 로직을 담당하는 useAuth hook
export const useAuthLogic = (type) => {
  console.log('useAuthLogic called with type:', type);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const history = useHistory();
  const { login, isAuthenticated } = useAuth();

  console.log('useAuthLogic state:', { isLoading, error, login: typeof login, isAuthenticated });

  // 인증 성공 후 리다이렉트
  useEffect(() => {
    if (shouldRedirect && isAuthenticated) {
      console.log('useAuthLogic - redirecting after successful login');
      setShouldRedirect(false);
      history.push('/');
    }
  }, [shouldRedirect, isAuthenticated, history]);

  const handleAuth = async (formData) => {
    console.log('handleAuth called with:', formData);
    setIsLoading(true);
    setError(null);
    
    try {
      if (type === 'login') {
        // 서비스 레이어를 통한 로그인
        const result = await authService.login(formData);
        console.log('로그인 성공:', result);
        
        // AuthContext의 login 함수 호출
        login(result.user, result.token);
        
        // 리다이렉트 플래그 설정
        setShouldRedirect(true);
      } else if (type === 'register') {
        // 비밀번호 검증
        await authService.validatePassword(formData.password, formData.confirmPassword);
        
        // 서비스 레이어를 통한 회원가입
        const result = await authService.register(formData);
        console.log('회원가입 성공:', result);
        history.push('/login');
      }
    } catch (err) {
      console.error('Auth error:', err);
      setError(err.message || (type === 'login' 
        ? '로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.'
        : '회원가입에 실패했습니다. 다시 시도해주세요.'
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleErrorClose = () => {
    console.log('handleErrorClose called');
    setError(null);
  };

  const result = {
    isLoading,
    error,
    handleAuth,
    handleErrorClose
  };

  console.log('useAuthLogic returning:', result);
  return result;
};