'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Loader2, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { forgotPassword, resetPassword } from '@/apis/auth';
import { toast } from 'sonner';

const VerifyOTPPage = () => {
    const router = useRouter();
    const { email } = useParams<{ email: string }>();
    const [formData, setFormData] = useState({
        otp: ['', '', '', '', '', ''],
        newPassword: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (value.length > 1 || !/^\d*$/.test(value)) return;

        const newOtp = [...formData.otp];
        newOtp[index] = value;
        setFormData(prev => ({ ...prev, otp: newOtp }));

        // Auto focus next input
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        // Handle backspace
        if (e.key === 'Backspace' && !formData.otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const otpValue = formData.otp.join('');
        if (otpValue.length !== 6) {
            setError('Please enter a valid OTP');
            setIsLoading(false);
            return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            setError('Passwords do not match');
            setIsLoading(false);
            return;
        }

        const toastId = toast.loading('Verifying and resetting password...');

        try {
            await resetPassword(
                decodeURIComponent(email),
                otpValue,
                formData.newPassword
            );

            toast.success('Password reset successful');

            // Redirect to login after successful reset
            router.push('/login');
        } catch (error: any) {
            const errorMessage = error.message ?? 'Password reset failed';
            setError(errorMessage);
            toast.error('Reset failed', {
                id: toastId,
                description: errorMessage
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendOtp = async () => {
        setIsLoading(true);
        try {
            await forgotPassword(email);
            toast.success('OTP resent successfully! Check your email.');

        } catch (error: any) {
            const errorMessage = error.message ?? 'Failed to resend OTP';
            setError(errorMessage);
            toast.error('Failed to resend OTP', {
                description: errorMessage
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#F7F9F3] p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#294D25]">Reset Password</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Enter the verification code sent to {decodeURIComponent(email)}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {/* OTP Input Section */}
                    <div>
                        <label htmlFor="otp-0" className="block text-sm font-medium text-gray-700 mb-2">
                            Enter Verification Code
                        </label>
                        <div className="flex justify-between gap-2">
                            {formData.otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-${index}`}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className="block w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7C957] focus:border-transparent"
                                />
                            ))}
                        </div>
                    </div>

                    {/* New Password Fields */}
                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                        </label>
                        <div className="relative">
                            <input
                                id="newPassword"
                                name="newPassword"
                                type={showPassword ? 'text' : 'password'}
                                value={formData.newPassword}
                                onChange={(e) => setFormData(prev => ({ ...prev, newPassword: e.target.value }))}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7C957] focus:border-transparent"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7C957] focus:border-transparent"
                            required
                        />
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-white bg-[#386641] hover:bg-[#294D25] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A7C957] disabled:opacity-50"
                        >
                            {isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                'Verify OTP'
                            )}
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Didn&apos;t receive the code?{' '}
                            <button
                                type="button"
                                onClick={handleResendOtp}
                                disabled={isLoading}
                                className="text-[#386641] hover:text-[#294D25] font-medium"
                            >
                                Resend OTP
                            </button>
                        </p>
                    </div>

                    <div className="text-center">
                        <Link
                            href="/login"
                            className="text-sm text-[#386641] hover:text-[#294D25] font-medium"
                        >
                            Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VerifyOTPPage;