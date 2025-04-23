import API from "@/lib/config";

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'buyer' | 'admin';
}

export interface SignupResponse {
  token: string;
  user: User;
}

export interface AuthError {
  error: string;
  message?: string;
}

/**
 * Register a new user
 */
export const signup = async (
  data: {
    name: string;
    email: string;
    password: string;
    role?: 'user' | 'buyer' | 'admin';
  }
): Promise<SignupResponse> => {
  try {
    const response = await API.post("/api/auth/signup", data);
    return response.data;
  } catch (error: any) {
    if (error.response?.data) {
      throw error.response.data;
    }
    throw new Error("Registration failed");
  }
};

/**
 * Login with email and password
 */
export const login = async (
  email: string,
  password: string
): Promise<SignupResponse> => {
  try {
    const response = await API.post("/api/auth/login", { email, password });
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error("Login failed");
  }
};

/**
 * Request password reset (sends OTP to email)
 */
export const forgotPassword = async (email: string): Promise<{ message: string }> => {
  try {
    const response = await API.post("/api/auth/forgot-password", { email });
    return { message: response.data.message };
  } catch (error: any) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error("Failed to send reset instructions");
  }
};

/**
 * Reset password with OTP received by email
 */
export const resetPassword = async (
  email: string,
  otp: string,
  newPassword: string
): Promise<{ message: string }> => {
  try {
    const response = await API.post("/api/auth/reset-password", {
      email,
      otp,
      newPassword,
    });
    return { message: response.data.message };
  } catch (error: any) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error("Password reset failed");
  }
};

/**
 * Change password when logged in (requires old password)
 */
export const changePassword = async (
  oldPass: string,
  newPass: string
): Promise<{ message: string }> => {
  try {
    const response = await API.post("/api/auth/change-password", {
      oldPass,
      newPass,
    });
    return { message: response.data.message };
  } catch (error: any) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error("Failed to change password");
  }
};

/**
 * Admin function to update a user's password by ID
 */
export const updatePasswordByUserId = async (
  id: string,
  newPassword: string
): Promise<{ message: string }> => {
  try {
    const response = await API.post("/api/auth/update-password", {
      id,
      newPassword,
    });
    return { message: response.data.message };
  } catch (error: any) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error("Failed to update password");
  }
};
