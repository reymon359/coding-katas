# GuideSmiths Kata Carlos Ble 08-05-2020

Kata at work by Carlos Ble

## Team

- Ramon Morcillo
- Matteo di Paolantonio,
- Giorgio Grassini
- Daniel Herrero

## Rules

```text
Normalizar frases:
   Buscar:
  Lang code: “ES”
  “Cocinero,” -> [“COCINERO”]
  “profesor inglés” -> [“PROFESOR”, “INGLES”]
  “profesor de inglés” -> [“PROFESOR”, “INGLES”]   - stop word
  “COCINEROS” -> [“COCINERO”]
  “PROFESORES” -> [“PROFESORE”]
  “áäà” -> [“AAA”]
  Lang code: “AR”
   “plural” : quitar s del principio
   preposiciones: son otras.
Mayusculas, minusculas.
Acentos.
Plurales.
```
