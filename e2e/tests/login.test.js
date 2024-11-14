describe('Login Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show login form when clicking login button', async () => {
    // Click the login button in the header
    await element(by.id('header-login-button')).tap();
    
    // Verify login form is visible
    await expect(element(by.id('login-form'))).toBeVisible();
  });

  it('should handle login flow correctly', async () => {
    // Click the login button in the header
    await element(by.id('header-login-button')).tap();

    // Type credentials
    await element(by.id('email-input')).typeText('test@example.com');
    await element(by.id('password-input')).typeText('password123');
    
    // Submit login
    await element(by.id('login-button')).tap();
    
    // Add assertions based on your login success/failure UI
  });

  it('should navigate to forgot password screen', async () => {
    // Click the login button in the header
    await element(by.id('header-login-button')).tap();
    
    // Click forgot password
    await element(by.id('forgot-password-button')).tap();
    
    // Verify we're on the forgot password screen
    await expect(element(by.text('Reset Password'))).toBeVisible();
  });
});
