// 실제 API 호출을 담당하는 서비스
export const authService = {
  async login(credentials) {
    // 실제 로그인 API 호출
    console.log('로그인 API 호출:', credentials);
    
    // 임시 구현 - 실제로는 fetch나 axios 사용
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email && credentials.password) {
          resolve({ 
            success: true, 
            user: { email: credentials.email },
            token: 'fake-jwt-token'
          });
        } else {
          reject(new Error('로그인 실패'));
        }
      }, 1000);
    });
  },

  async register(userData) {
    // 실제 회원가입 API 호출
    console.log('회원가입 API 호출:', userData);
    
    // 임시 구현
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email && userData.password && userData.name) {
          resolve({ 
            success: true, 
            user: { email: userData.email, name: userData.name }
          });
        } else {
          reject(new Error('회원가입 실패'));
        }
      }, 1000);
    });
  },

  async validatePassword(password, confirmPassword) {
    if (password !== confirmPassword) {
      throw new Error('비밀번호가 일치하지 않습니다.');
    }
    if (password.length < 6) {
      throw new Error('비밀번호는 최소 6자 이상이어야 합니다.');
    }
    return true;
  }
}; 