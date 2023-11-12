// Import the function to test
import { login } from "./login";

const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = String(value);
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    }
  };
})();


// Set up the global environment for localStorage
Object.defineProperty(globalThis, 'localStorage', { value: localStorageMock });

// Mock for fetch
globalThis.fetch = jest.fn();

// Utility to reset mocks between tests
const resetMocks = () => {
    globalThis.fetch.mockReset();
  localStorageMock.clear();
};

describe('login', () => {
  beforeEach(() => {
    resetMocks();
  });

  it('should save profile and token on successful login', async () => {
    // Prepare the fetch mock for success
    globalThis.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        accessToken: 'test-token',
        email: 'test@noroff.no'
      })
    });

    const profile = await login('test@noroff.no', 'password');

    // Assert that fetch was called
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);

    // Assert that the token was stored in localStorage
    expect(localStorage.getItem('token')).toBe('"test-token"');

    // Assert that the email returned matches the mock
    expect(profile.email).toBe('test@noroff.no');

    // Assert that the token was stored in localStorage
    expect(localStorage.getItem('token')).toBe('"test-token"');

  });

  it('should throw an error with response status text on failed login', async () => {
    // Prepare the fetch mock for failure
    globalThis.fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Unauthorized'
    });

    // Expect the login function to throw an error
    await expect(login('test@noroff.no', 'password')).rejects.toThrow('Unauthorized');
  });
});
