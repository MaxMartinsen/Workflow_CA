// Import the function to test
import { register } from "./register";

// Mock for fetch
globalThis.fetch = jest.fn();

describe('register', () => {
  // Utility function to reset mocks between tests
  const resetMocks = () => {
    globalThis.fetch.mockReset();
  };

  beforeEach(() => {
    resetMocks();
  });

  it('should return user data on successful registration', async () => {
    // Mock a successful fetch response
    globalThis.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        name: 'Name Surname',
        email: 'name@noroff.no',
      }),
    });
  
    // Perform the registration
    const data = await register('Name Surname', 'name@noroff.no', 'password123', 'avatar.jpg');
  
    // Assert fetch was called with correct arguments
    expect(globalThis.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/social/auth/register'),
      {
        method: 'post', // Make sure the method is lowercase as received
        body: JSON.stringify({
          name: 'Name Surname',
          email: 'name@noroff.no',
          password: 'password123',
          avatar: 'avatar.jpg',
        }),
        headers: { // Ensure this structure matches what the fetch mock received
          "Content-Type": "application/json",
        },
      }
    );

    // Assert the resolved value is correct
    expect(data).toEqual({
      name: 'Name Surname',
      email: 'name@noroff.no',
    });
  });

  it('should throw an error when registration fails', async () => {
    // Mock a failed fetch response
    globalThis.fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Bad Request',
    });

    // Assert that the register function throws an error when the registration fails
    await expect(register('Name Surname', 'invalidemail', 'password123', 'avatar.jpg')).rejects.toThrow('Bad Request');
  });
});

