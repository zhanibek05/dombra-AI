from basic_pitch.inference import predict
from openai import OpenAI
import base64



from settings import OPENAI_API_KEY

client = OpenAI(api_key=OPENAI_API_KEY)

dombra_bottom_string_notes = {
    0:  "Sol (open string)",   # открытая струна Соль
    1:  "La bemol",   # Ля бемоль
    2:  "La",   # Ля
    3:  "Si bemol",   # Си бемоль
    4:  "Si",   # Си
    5:  "Do-2",   # До2
    6:  "",   #
    7:  "Re-2",   # Ре2
    8:  "",   #
    9:  "Mi-2",   # Ми2
    10: "Fa-2",  # Фа2
    11: "Fa-2 diesis",  # Фа2 диез
    12: "Sol-2",  # Соль2
    13: "",  #
    14: "la-2",  # Ля2
    15: "",  #
    16: "Si-2",  # Си2
    17: "Do-3",  # До3
    18: "",
    19: "Re-3",  # Ре3
}



def get_dombra_numbers():
    system_prompt = f"""What's in image?
                        """
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{
            "role": "user",
            "content": system_prompt,
            "image_url": "https://dombrabro.kz/wp-content/uploads/2023/01/ac-dc-back-in-black-dombyra1.png"
        }]
    )
    return response.choices[0].message.content


print(get_dombra_numbers([60, 60, 65, 60, 48, 50, 69, 48, 53, 65, 65, 60, 53, 60, 60, 65, 65, 46, 64, 46, 64, 62, 70, 46, 48, 69, 65, 65, 48, 53, 65, 53, 65, 65, 53, 65]))


