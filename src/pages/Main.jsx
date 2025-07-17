import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/practice/atoms/Button';

function Main() {
  console.log('Main component rendering');
  
  const { user, logout } = useAuth();
  console.log('Main - auth state:', { user, logout: typeof logout });

  const handleLogout = () => {
    console.log('Main - handleLogout called');
    logout();
  };

  console.log('Main - rendering with user:', user);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">메인 페이지</h1>
        
        {user && (
          <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              환영합니다, {user.name || user.email}님!
            </h2>
            <p className="text-gray-600">로그인 상태입니다.</p>
          </div>
        )}
        
        <div className="space-x-4">
          {user ? (
            <button 
              onClick={handleLogout}
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              로그아웃
            </button>
          ) : (
            <>
              <Link 
                to="/login" 
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
              >
                로그인
              </Link>
              <Link 
                to="/register" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
              >
                회원가입
              </Link>
            </>
          )}
        </div>

       
      </div>
    </div>
  );
}

export default Main;