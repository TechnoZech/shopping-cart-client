const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function storeUserEmail(idToken) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': idToken,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to store user info');
    }

    return await response.json();
  } catch (error) {
    console.error('Error storing user info:', error);
    throw error;
  }
}