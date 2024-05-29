import openai
import os
from dotenv import load_dotenv

# Cargar variables de entorno desde el archivo .env
load_dotenv()

# Verificar la clave de API
api_key = os.getenv('OPENAI_API_KEY')
print(f"API Key: {api_key}")  # Verificar si la clave de API se está cargando

if not api_key:
    raise ValueError("No API key found in environment variables")

# Configurar la clave de API de OpenAI
openai.api_key = api_key

def get_response(prompt):
    try:
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=150
        )
        return response.to_dict()['choices'][0]['message']['content']
    except Exception as e:
        print(f"Error fetching response: {e}")
        return None

if __name__ == "__main__":
    prompt = input("Enter your prompt: ")
    response = get_response(prompt)
    if response:
        print("Response from OpenAI:", response)
    else:
        print("Failed to get response from OpenAI")
