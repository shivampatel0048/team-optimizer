'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { forgotPassword } from '@/apis/auth';
import { toast } from 'sonner';

const ForgotPasswordPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccess(false);

        const toastId = toast.loading('Sending reset instructions...');

        try {
            const response = await forgotPassword(email);
            setSuccess(true);
            toast.success('Check your email', {
                id: toastId,
                description: response.message
            });
            router.push(`/forgot-password/${email}`);
        } catch (error: any) {
            const errorMessage = error.message || 'Failed to send reset instructions';
            setError(errorMessage);
            toast.error('Reset Failed', {
                id: toastId,
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
                        Enter your email and we&apos;ll send you a link to reset your password
                    </p>
                </div>

                {success ? (
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                        <h3 className="text-lg font-medium text-green-800">Check your email</h3>
                        <p className="mt-2 text-sm text-green-700">
                            We&apos;ve sent a password reset link to {email}. Please check your inbox and follow the instructions.
                        </p>
                        <div className="mt-4">
                            <Link
                                href="/login"
                                className="text-[#386641] hover:text-[#294D25] font-medium"
                            >
                                Back to Login
                            </Link>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A7C957] focus:border-transparent"
                                placeholder="name@example.com"
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
                                    'Send Reset Link'
                                )}
                            </button>
                        </div>

                        <div className="text-center">
                            <Link
                                href="/login"
                                className="text-[#386641] hover:text-[#294D25] font-medium text-sm"
                            >
                                Back to Login
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ForgotPasswordPage;