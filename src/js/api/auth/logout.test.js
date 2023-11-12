// Import the function you want to test
import { logout } from "./logout";


describe('logout', () => {
    // Mock localStorage methods
    const removeItemMock = jest.fn();
  
    beforeAll(() => {
      // Mock the localStorage functions
      Object.defineProperty(globalThis, 'localStorage', {
        value: {
          removeItem: removeItemMock,
        },
        writable: true,
      });
    });
  
    beforeEach(() => {
      // Clear all mocks before each test
      jest.clearAllMocks();
    });
  
    it('should remove the token and profile from localStorage on logout', () => {
      // Call the logout function
      logout();
  
      // Assert that localStorage.removeItem was called with 'token'
      expect(removeItemMock).toHaveBeenCalledWith('token');
      
      // Assert that localStorage.removeItem was called with 'profile'
      expect(removeItemMock).toHaveBeenCalledWith('profile');
  
      // Optionally, check the number of times removeItem was called
      expect(removeItemMock).toHaveBeenCalledTimes(2);
    });
  
    afterAll(() => {
      // Clean up the localStorage mock
      delete globalThis.localStorage;
    });
  });
