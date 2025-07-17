import React, { useState, useEffect } from 'react';
import { AuthContext } from "./index";

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 초기 로딩 시 로컬 스토리지에서 사용자 정보 확인
  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('userData');
        
        console.log('AuthProvider - checking auth status:', { token: !!token, userData: !!userData });
        
        if (token && userData) {
          const parsedUser = JSON.parse(userData);
          console.log('AuthProvider - setting user:', parsedUser);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error('인증 상태 확인 중 오류:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // user 상태 변화 감지
  useEffect(() => {
    console.log('AuthProvider - user state changed:', user);
  }, [user]);

  // 로그인 함수
  const login = (userData, token) => {
    console.log('AuthProvider - login called with:', { userData, token });
    setUser(userData);
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  // 로그아웃 함수
  const logout = () => {
    console.log('AuthProvider - logout called');
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  };

  // 인증 상태 확인 (값으로 제공)
  const isAuthenticated = user !== null;

  const value = {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout
  };

  console.log('AuthProvider - current state:', { user, isLoading, isAuthenticated });

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;