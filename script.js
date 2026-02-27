/**
 * SIMULADOR DE EXAMEN - LENGUAJES Y AUTÓMATAS (ANÁLISIS SEMÁNTICO Y SINTÁCTICO)
 * Desarrollador: AI Assistant (Antigravity)
 */

// Banco de 70 preguntas (45 teoría, 25 ejemplos de código)
// Centrado en Análisis Semántico, Tabla de Símbolos y Tipado.
const BANCO_PREGUNTAS = [
    // --- TEORÍA (1-45): Análisis Semántico, Sintáctico y Tablas de Símbolos ---
    {
        pregunta: "¿Cuál es la principal diferencia entre el análisis sintáctico y el semántico?",
        opciones: [
            "El sintáctico revisa la estructura; el semántico revisa el significado y consistencia",
            "El sintáctico es más lento que el semántico",
            "El semántico solo revisa errores de ortografía",
            "No hay diferencia, ocurren al mismo tiempo"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es la 'unidireccionalidad' en el contexto de una gramática de atributos?",
        opciones: [
            "Que solo se pueden heredar atributos hacia abajo",
            "Que los valores de los atributos fluyen en un orden definido por las dependencias",
            "Que el compilador solo lee el código una vez",
            "Que no existen ciclos en las definiciones de atributos"
        ],
        correcta: 1
    },
    {
        pregunta: "En el análisis semántico, ¿qué significa que una variable esté 'en el ámbito' (in scope)?",
        opciones: [
            "Que está escrita con mayúsculas",
            "Que es visible y accesible desde el punto actual de ejecución",
            "Que ocupa mucho espacio en la memoria RAM",
            "Que es una variable de tipo global únicamente"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué operación de la tabla de símbolos se usa para buscar si un identificador ya existe?",
        opciones: [
            "Insert",
            "Lookup (o Search)",
            "Delete",
            "Update"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué es un atributo 'sintetizado'?",
        opciones: [
            "Un valor que se calcula a partir de los atributos de los nodos hijos",
            "Un valor que se hereda del nodo padre",
            "Un atributo que se borra después del análisis",
            "Un error de tipo semántico"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es un atributo 'heredado'?",
        opciones: [
            "Un valor obtenido de los nodos hermanos o del nodo padre",
            "Un valor que sube en el árbol de abajo hacia arriba",
            "Un atributo que se define en el lexer",
            "Una variable que no cambia su valor"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es el propósito de un chequeo de tipos estático?",
        opciones: [
            "Optimizar la velocidad de la red",
            "Detectar errores de tipo en tiempo de compilación",
            "Detectar errores durante la ejecución del programa",
            "Contar cuántas líneas de código tiene el programa"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué se almacena típicamente en una entrada de la tabla de símbolos?",
        opciones: [
            "Nombre, tipo, ámbito y dirección/desplazamiento",
            "Solo el nombre del identificador",
            "El código fuente completo",
            "La fecha de creación del archivo"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es el 'tipado fuerte' (Strong Typing)?",
        opciones: [
            "Un sistema que impide realizar operaciones entre tipos incompatibles",
            "Un lenguaje que requiere mucha memoria RAM",
            "Un lenguaje que solo usa números enteros",
            "Cuando el compilador ignora todos los errores"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué estructura de datos es más eficiente para implementar una tabla de símbolos de gran tamaño?",
        opciones: [
            "Lista ligada lineal",
            "Tabla Hash",
            "Arreglo de strings",
            "Pila simple"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué es el 'shadowing' (ocultamiento) de variables?",
        opciones: [
            "Cuando una variable local tiene el mismo nombre que una externa y la oculta",
            "Cuando una variable se borra accidentalmente",
            "Un error de sintaxis por usar nombres muy largos",
            "Cuando dos variables apuntan al mismo objeto"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es la 'coerción' de tipos?",
        opciones: [
            "Obligar al usuario a declarar variables",
            "Una conversión implícita de tipos realizada por el compilador",
            "Borrar el árbol sintáctico",
            "Un tipo de ataque informático"
        ],
        correcta: 1
    },
    {
        pregunta: "En una gramática de atributos, ¿cuándo se dice que es 'S-Atribuida'?",
        opciones: [
            "Si solo usa atributos sintetizados",
            "Si solo usa atributos heredados",
            "Si no tiene atributos",
            "Si es una gramática para SQL"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es un 'árbol sintáctico decorado'?",
        opciones: [
            "Un árbol con colores para la presentación",
            "Un árbol que contiene los valores de los atributos semánticos calculados",
            "Un árbol que ha sido podado para ser más pequeño",
            "Un árbol que solo tiene los terminales"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué comprueba un analizador semántico respecto a las funciones?",
        opciones: [
            "Que el número y tipo de argumentos coincidan con la declaración",
            "Que el nombre de la función sea corto",
            "Que la función no use bucles",
            "Que la función esté escrita en inglés"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué técnica se usa para manejar ámbitos anidados en una tabla de símbolos?",
        opciones: [
            "Una sola tabla global para todo el programa",
            "Una pila de tablas de símbolos (una por ámbito)",
            "Guardar todo en un archivo de texto",
            "Ignorar los ámbitos internos"
        ],
        correcta: 1
    },
    {
        pregunta: "La equivalencia de tipos de 'nombre' significa que:",
        opciones: [
            "Dos tipos son iguales si su estructura es idéntica bit a bit",
            "Dos tipos son iguales solo si tienen el mismo nombre en la declaración",
            "Dos variables pueden compartir el mismo nombre",
            "El nombre del tipo debe ser una palabra reservada"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué es el tipado dinámico?",
        opciones: [
            "Los tipos se asocian a las variables en tiempo de compilación",
            "Los tipos de los datos se verifican durante la ejecución (runtime)",
            "Las variables pueden cambiar de nombre aleatoriamente",
            "Es un tipo de tipado que no usa memoria"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué es la 'sobrecarga' (overloading) de operadores?",
        opciones: [
            "Usar un mismo operador para diferentes tipos de datos (como el '+' para int y string)",
            "Poner demasiados operadores en una sola línea",
            "Error que rompe el compilador por usar muchos símbolos",
            "Un proceso de optimización de hardware"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué información guarda el 'offset' en la tabla de símbolos para una variable?",
        opciones: [
            "La cantidad de veces que se usa",
            "La posición relativa de la variable dentro de su bloque de memoria",
            "El tiempo que tarda en cargarse",
            "El nombre del archivo fuente"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué es un analizador sintáctico descendente (Top-Down)?",
        opciones: [
            "Construye el árbol desde la raíz hacia las hojas",
            "Construye el árbol desde las hojas hacia la raíz",
            "Lee el código de abajo hacia arriba",
            "Solo funciona para lenguajes de bajo nivel"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es una gramática ambigua?",
        opciones: [
            "Una que no tiene reglas claras",
            "Una que puede generar más de un árbol de derivación para una misma cadena",
            "Una que usa símbolos extraños",
            "Una que es muy difícil de leer para humanos"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué es LALR en el contexto de análisis sintáctico?",
        opciones: [
            "Un tipo de autómata para análisis léxico",
            "Un generador de analizadores sintácticos (Look-Ahead LR)",
            "Un lenguaje de programación antiguo",
            "Una técnica de limpieza de código"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Cuál de estos es un error SINTÁCTICO típico?",
        opciones: [
            "Usar una variable no declarada",
            "Falta de un punto y coma o paréntesis desbalanceados",
            "Sumar un entero con un booleano en un lenguaje estricto",
            "Dividir entre cero"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué fase se encarga de agrupar caracteres en tokens?",
        opciones: [
            "Análisis Sintáctico",
            "Análisis Léxico",
            "Análisis Semántico",
            "Optimización"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué es un atributo 'L-Atribuido'?",
        opciones: [
            "Uno que solo fluye de izquierda a derecha en el árbol",
            "Uno que fluye libremente en cualquier dirección",
            "Uno que solo existe en lenguajes lógicos",
            "Un atributo que se pierde al compilar"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es el 'Casting' explícito?",
        opciones: [
            "Cuando el compilador decide el tipo automáticamente",
            "Cuando el programador indica manualmente la conversión de tipo",
            "Un error de desbordamiento",
            "La eliminación de variables muertas"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué es una tabla de símbolos de un solo nivel?",
        opciones: [
            "Una donde todas las variables son globales",
            "Una que solo tiene una fila",
            "Una que solo funciona para números",
            "Una que no permite funciones"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué significa 'Duck Typing'?",
        opciones: [
            "Si camina como pato y suena como pato, el tipo es correcto (basado en métodos/propiedades)",
            "Un lenguaje diseñado por biólogos",
            "Un error de tipo animal",
            "Cuando todas las variables se llaman 'duck'"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué comprueba la regla de 'concordancia de tipos'?",
        opciones: [
            "Que los tipos en expresiones aritméticas y lógicas sean compatibles",
            "Que el nombre de la variable rime con su tipo",
            "Que todas las variables pesen lo mismo",
            "Que no existan más de 10 variables"
        ],
        correcta: 0
    },
    {
        pregunta: "En Java, el ámbito de una variable local termina:",
        opciones: [
            "Al final del archivo",
            "Al cierre de la llave '}' del bloque donde se declaró",
            "Cuando se le asigna null",
            "Al apagar la computadora"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué es el análisis semántico estático?",
        opciones: [
            "El que se hace sin ejecutar el programa",
            "El que requiere que el programa esté corriendo",
            "El que solo revisa variables constantes",
            "Un análisis que nunca cambia su resultado"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es un 'error de entorno' o ámbito?",
        opciones: [
            "Referenciar un identificador que no existe en el ámbito actual",
            "Un error de conexión a internet",
            "Poner un archivo en la carpeta equivocada",
            "Un error de temperatura del CPU"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué función tiene 'Delete' en una tabla de símbolos de múltiples niveles?",
        opciones: [
            "Eliminar todas las variables locales al salir de un bloque o función",
            "Eliminar el archivo fuente",
            "Formatear la tabla de símbolos",
            "Corregir errores ortográficos"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Para qué sirve el análisis de tipos?",
        opciones: [
            "Asegurar que los operadores se apliquen a operandos correctos",
            "Saber cuántas clases hay en el proyecto",
            "Cambiar el color de las fuentes en el IDE",
            "Elegir el mejor hardware para ejecutar"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es la 'inferencia de tipos'?",
        opciones: [
            "Deducir el tipo de una variable a partir de su valor de inicialización",
            "Adivinar qué errores va a tener el programador",
            "Cuando el usuario tiene que escribir el tipo siempre",
            "Un tipo de magia negra en compiladores"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es un registro de activación?",
        opciones: [
            "Un espacio en la pila que guarda el estado de una función activa",
            "Un botón para iniciar el programa",
            "Un log de errores históricos",
            "Un registro físico del procesador (como EAX)"
        ],
        correcta: 0
    },
    {
        pregunta: "La fase semántica interactúa principalmente con:",
        opciones: [
            "La tabla de símbolos",
            "El ventilador del procesador",
            "La tarjeta de red",
            "El monitor"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es un identificador 'redefinido' en el mismo ámbito?",
        opciones: [
            "Un error semántico de declaración duplicada",
            "Una técnica de optimización",
            "Cambiar el valor de una variable",
            "Una buena práctica de programación"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es el 'polimorfismo ad-hoc'?",
        opciones: [
            "Sobrecarga de funciones y operadores",
            "Herencia de clases",
            "Uso de plantillas (templates)",
            "Un error de tipos"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es una expresión r-value?",
        opciones: [
            "Un valor que solo puede estar a la derecha de una asignación",
            "Un valor que tiene que ser un registro",
            "Un error de lectura",
            "Una variable global"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es una gramática LL(1)?",
        opciones: [
            "Una gramática que se lee de izquierda a derecha con 1 token de pre-análisis",
            "Una gramática muy grande",
            "Una que no permite números",
            "Un protocolo de red para tokens"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es el 'enlace estático' (static link) en gestión de ámbitos?",
        opciones: [
            "Un puntero al registro de activación del padre léxico",
            "Una conexión a una librería estática",
            "Un error de compilación",
            "Un tipo de variable global"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cómo se llama el proceso de asociar un uso de variable con su declaración?",
        opciones: [
            "Resolución de nombres (Name Resolution)",
            "Copiado de memoria",
            "Escaneo léxico",
            "Impresión de resultados"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es un tipo de dato 'recursivo'?",
        opciones: [
            "Un tipo que se define en términos de sí mismo (como una lista ligada o árbol)",
            "Un tipo que hace que el programa nunca termine",
            "Un error de tipos circular",
            "Una función que se llama a sí misma"
        ],
        correcta: 0
    },

    // --- EJEMPLOS DE CÓDIGO (46-70): Semántica y Sintaxis en Java, Python, PHP ---
    {
        pregunta: "Java: ¿Qué error genera?\n\nCódigo:\n\nint a = true;",
        opciones: [
            "Incompatible types: boolean cannot be converted to int",
            "Syntax Error: missing semicolon",
            "Runtime Error: Division by zero",
            "No genera error, true se convierte en 1"
        ],
        correcta: 0
    },
    {
        pregunta: "Python: ¿Qué sucede al ejecutar el siguiente código si x no fue declarada?\n\nCódigo:\n\nprint(x + 5)",
        opciones: [
            "Imprime 5",
            "NameError: name 'x' is not defined",
            "Imprime None",
            "Error de sintaxis: falta declarar x"
        ],
        correcta: 1
    },
    {
        pregunta: "PHP: ¿Qué resultado da?\n\nCódigo:\n\necho \"5\" * 2;",
        opciones: [
            "\"55\"",
            "10",
            "Error de tipos incompatibles",
            "5.2"
        ],
        correcta: 1
    },
    {
        pregunta: "Python: ¿Qué imprime?\n\nCódigo:\n\ntype(3.14)",
        opciones: [
            "<class 'int'>",
            "<class 'float'>",
            "<class 'double'>",
            "number"
        ],
        correcta: 1
    },
    {
        pregunta: "Java: ¿Qué ocurre con el siguiente código?\n\nCódigo:\n\nString s = 5;",
        opciones: [
            "s vale \"5\"",
            "Error: incompatible types: int cannot be converted to String",
            "s se convierte en un objeto Integer",
            "Compila pero s es null"
        ],
        correcta: 1
    },
    {
        pregunta: "PHP: ¿Qué hace el siguiente código?\n\nCódigo:\n\n$a = \"saludo\";\n$$a = \"hola\";\necho $saludo;",
        opciones: [
            "Imprime \"saludo\"",
            "Imprime \"hola\"",
            "Error de sintaxis por los dos símbolos de pesos",
            "No imprime nada"
        ],
        correcta: 1
    },
    {
        pregunta: "Python: Dado el siguiente código, ¿qué error es?\n\nCódigo:\n\nd = {\"a\": 1}\nprint(d[\"b\"])",
        opciones: [
            "SyntaxError",
            "KeyError (Semántico dinámico)",
            "TypeError",
            "ZeroDivisionError"
        ],
        correcta: 1
    },
    {
        pregunta: "Java: ¿Es válido?\n\nCódigo:\n\nfloat f = 3.14;",
        opciones: [
            "Sí, compila perfectamente",
            "No, requiere sufijo 'f' (3.14f) porque 3.14 es double",
            "Sí, pero f valdrá 3",
            "Solo si se importa java.lang.Float"
        ],
        correcta: 1
    },
    {
        pregunta: "Python: ¿Qué devuelve?\n\nCódigo:\n\n\"G\" + 1",
        opciones: [
            "\"G1\"",
            "TypeError: can only concatenate str (not \"int\") to str",
            "72 (Valor ASCII)",
            "\"H\""
        ],
        correcta: 1
    },
    {
        pregunta: "PHP: ¿Qué imprime el código?\n\nCódigo:\n\n$x = 10;\nfunction f() {\n    echo $x;\n}\nf();",
        opciones: [
            "10",
            "Un error o aviso de variable indefinida (por ámbito)",
            "null",
            "0"
        ],
        correcta: 1
    },
    {
        pregunta: "Java: En el siguiente código, el error es detectado por:\n\nCódigo:\n\nfinal int c = 5;\nc = 10;",
        opciones: [
            "Analizador Léxico",
            "Analizador Sintáctico",
            "Analizador Semántico (inmutabilidad)",
            "JVM en tiempo de ejecución"
        ],
        correcta: 2
    },
    {
        pregunta: "Python: ¿Cuál es el resultado?\n\nCódigo:\n\n3 == \"3\"",
        opciones: [
            "True",
            "False",
            "TypeError",
            "None"
        ],
        correcta: 1
    },
    {
        pregunta: "Java: ¿Qué imprime?\n\nCódigo:\n\nSystem.out.println(10 / 4);",
        opciones: [
            "2.5",
            "2 (División entera)",
            "3",
            "Error"
        ],
        correcta: 1
    },
    {
        pregunta: "PHP: ¿Cuál es el operador de comparación estricta (valor y tipo)?",
        opciones: [
            "==",
            "===",
            "!=",
            "contains"
        ],
        correcta: 1
    },
    {
        pregunta: "Java: ¿Qué sucede en este caso?\n\nCódigo:\n\nint[] arr = {1, 2};\nSystem.out.println(arr[2]);",
        opciones: [
            "Imprime 0",
            "ArrayIndexOutOfBoundsException (Error dinámico)",
            "Error de compilación",
            "Imprime null"
        ],
        correcta: 1
    },
    {
        pregunta: "Python: ¿Qué hace la siguiente instrucción dentro de una función?\n\nCódigo:\n\nglobal x",
        opciones: [
            "Crea una copia de la variable x",
            "Indica que la función usará la variable x del ámbito global",
            "Borra la variable x global",
            "Es un error de sintaxis"
        ],
        correcta: 1
    },
    {
        pregunta: "Java: ¿Por qué falla el siguiente segmento?\n\nCódigo:\n\nvoid miMetodo() {\n    return 10;\n}",
        opciones: [
            "Le faltan los parámetros",
            "Un método 'void' no puede retornar valores",
            "10 es muy pequeño",
            "Falta el punto y coma"
        ],
        correcta: 1
    },
    {
        pregunta: "PHP: ¿Qué imprime el siguiente código?\n\nCódigo:\n\n$x = true;\nif($x == 1) echo \"igual\";",
        opciones: [
            "Nada",
            "\"igual\" (debido a la coerción de tipos)",
            "Error de tipos",
            "1"
        ],
        correcta: 1
    },
    {
        pregunta: "Python: ¿Qué imprime?\n\nCódigo:\n\nprint(len([1, 2, 3]))",
        opciones: [
            "3",
            "1",
            "[1, 2, 3]",
            "TypeError"
        ],
        correcta: 0
    },
    {
        pregunta: "Java: ¿Qué es 'this' en un método de instancia?",
        opciones: [
            "Una palabra clave que referencia a la instancia actual",
            "Un error de sintaxis",
            "Una variable global",
            "Un tipo de dato"
        ],
        correcta: 0
    },
    {
        pregunta: "PHP: ¿Qué define la siguiente firma?\n\nCódigo:\n\nfunction suma(int $a, int $b): int { ... }",
        opciones: [
            "Tipado estricto para argumentos y retorno",
            "Un error de sintaxis en PHP",
            "Una función que solo acepta strings",
            "Un comentario descriptivo únicamente"
        ],
        correcta: 0
    },
    {
        pregunta: "Python: ¿Qué sucede con estas asignaciones?\n\nCódigo:\n\nx = 10;\nx = \"diez\";",
        opciones: [
            "Error de tipos",
            "x cambia su tipo dinámicamente a string",
            "x se queda como entero y da error",
            "El programa se detiene"
        ],
        correcta: 1
    },
    {
        pregunta: "Java: ¿Qué error hay en la siguiente clase?\n\nCódigo:\n\npublic class A {\n    public void a() {}\n    public void a() {}\n}",
        opciones: [
            "Ninguno, se sobrecargan",
            "Method a() is already defined (Duplicación de firma en el mismo ámbito)",
            "Shadowing ilegal",
            "Error léxico"
        ],
        correcta: 1
    },
    {
        pregunta: "PHP: ¿Qué imprime?\n\nCódigo:\n\necho (5 > 3) ? \"si\" : \"no\";",
        opciones: [
            "\"si\"",
            "\"no\"",
            "5",
            "true"
        ],
        correcta: 0
    },
    {
        pregunta: "Java: ¿Por qué el código genera un error?\n\nCódigo:\n\nbyte b = 128;",
        opciones: [
            "El número es par",
            "El rango de byte es -128 a 127 (desbordamiento detectado semánticamente)",
            "Java no permite bytes",
            "Falta inicializar b"
        ],
        correcta: 1
    },

    // --- NUEVAS PREGUNTAS (Banco Externo) ---
    {
        pregunta: "¿Cuál de las siguientes situaciones representa un conflicto semántico relacionado con tipos?",
        opciones: [
            "Uso incorrecto de paréntesis en una expresión",
            "Definir una producción gramatical ambigua",
            "Falta de una palabra reservada",
            "Aplicar un operador lógico a operandos numéricos incompatibles"
        ],
        correcta: 3
    },
    {
        pregunta: "PHP: ¿Qué error semántico es más probable en el siguiente bucle si $x no ha sido definida?\n\nCódigo:\n\n<?php\nwhile ($x < 5) {\n    echo $x;\n}\n?>",
        opciones: [
            "Error semántico por posible uso de variable no inicializada",
            "Error lógico por salida repetitiva",
            "Error léxico",
            "Error sintáctico"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué se verifica semánticamente al evaluar una expresión aritmética?",
        opciones: [
            "La optimización de la expresión",
            "La correcta escritura de los símbolos",
            "La asociación de operadores",
            "La compatibilidad de tipos entre operandos y operadores"
        ],
        correcta: 3
    },
    {
        pregunta: "¿Qué aspecto semántico se relaciona con el control de tipos implícitos y explícitos?",
        opciones: [
            "El reconocimiento de tokens complejos",
            "Las reglas de conversión y compatibilidad de tipos",
            "La generación de código intermedio",
            "La estructura del árbol sintáctico"
        ],
        correcta: 1
    },
    {
        pregunta: "C: ¿Cuál es el error en la siguiente instrucción si 'y' no está declarada?\n\nCódigo:\n\nint x = y + 5;",
        opciones: [
            "Error sintáctico",
            "Error semántico por uso de variable no declarada",
            "Error léxico",
            "Error de ejecución"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué información semántica suele asociarse a un identificador en la tabla de símbolos?",
        opciones: [
            "La posición exacta en memoria durante la ejecución",
            "La cantidad de veces que se utiliza en el programa",
            "El número de líneas de código donde aparece",
            "El tipo de dato, el ámbito y otros atributos relevantes"
        ],
        correcta: 3
    },
    {
        pregunta: "Python: ¿Qué tipo de error podría señalar un analizador semántico estricto en el siguiente código?\n\nCódigo:\n\nx = True\ny = 3\nresultado = x * y",
        opciones: [
            "Error sintáctico",
            "Error semántico por uso no previsto de tipos en una operación aritmética",
            "Error lógico",
            "Error léxico"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Por qué es importante el control de tipos en el análisis semántico?",
        opciones: [
            "Para acelerar el proceso de compilación",
            "Para permitir cualquier conversión automática de datos",
            "Para definir la estructura del árbol sintáctico",
            "Para asegurar que las operaciones entre datos sean coherentes y válidas"
        ],
        correcta: 3
    },

    // --- NUEVAS PREGUNTAS (Generadas) ---
    {
        pregunta: "¿Qué sucede en una Gramática de Atributos si existe una dependencia circular entre los atributos de un nodo?",
        opciones: [
            "El compilador puede entrar en un bucle infinito al intentar calcular los valores",
            "Se ignoran automáticamente los atributos circulares",
            "El análisis semántico se vuelve más rápido",
            "Los atributos se inicializan en cero por defecto"
        ],
        correcta: 0
    },
    {
        pregunta: "En la gestión de tipos, ¿cuál es la principal ventaja de la 'Equivalencia Estructural' sobre la 'Equivalencia por Nombre'?",
        opciones: [
            "Es más fácil de implementar para el compilador",
            "Permite que dos tipos sean compatibles si tienen la misma estructura, aunque sus nombres sean distintos",
            "Requiere menos memoria en tiempo de ejecución",
            "Evita que el programador use alias de tipos"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es la función del 'Enlace Estático' (Static Link) dentro de un registro de activación en la pila?",
        opciones: [
            "Conectar con una librería externa .dll o .so",
            "Permitir el acceso a variables de ámbitos (scopes) superiores no globales",
            "Mantener la conexión a la base de datos",
            "Acelerar el proceso de recolección de basura"
        ],
        correcta: 1
    },
    {
        pregunta: "En C++, ¿qué tipo de error semántico se produce al intentar acceder a un miembro privado de una clase desde una función externa?",
        opciones: [
            "Error de Sintaxis",
            "Error de Ámbito/Visibilidad (Access Violation en tiempo de compilación)",
            "Error de Segmentación",
            "Advertencia (Warning) de estilo"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Cuál de estos es un ejemplo de 'Coerción de Tipos' en un lenguaje como C o Java?\n\nCódigo:\n\nint i = 5;\nfloat f = i; // i se convierte a float",
        opciones: [
            "Sumar un 'int' y un 'float', donde el 'int' se convierte automáticamente a 'float'",
            "Usar un (int) para convertir un float manualmente",
            "Cambiar el nombre de una variable en tiempo de ejecución",
            "Declarar una variable como constante"
        ],
        correcta: 0
    }
];

// Configuración
const CONFIG = {
    preguntasPorExamen: 25,
    porcentajeAprobado: 70
};

// Estado de la aplicación
let preguntasExamen = [];
let indiceActual = 0;
let respuestasUsuario = [];

// Elementos del DOM
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaExamen = document.getElementById('pantalla-examen');
const pantallaResultados = document.getElementById('pantalla-resultados');

const btnIniciar = document.getElementById('btn-iniciar');
const btnAnterior = document.getElementById('btn-anterior');
const btnSiguiente = document.getElementById('btn-siguiente');
const btnFinalizar = document.getElementById('btn-finalizar');
const btnFinalizarYa = document.getElementById('btn-finalizar-ya');
const btnReiniciar = document.getElementById('btn-reiniciar');
const btnRevisar = document.getElementById('btn-revisar');

const contenedorPregunta = document.getElementById('contenedor-pregunta');
const indicadorProgreso = document.getElementById('indicador-progreso');
const barraProgreso = document.getElementById('barra-progreso');
const contenedorRevision = document.getElementById('contenedor-revision');
const listaRevision = document.getElementById('lista-revision');

const calificacionTexto = document.getElementById('calificacion');
const aciertosTexto = document.getElementById('aciertos');
const totalTexto = document.getElementById('total-preguntas');
const mensajeDinamico = document.getElementById('mensaje-dinamico');
const circleProgress = document.getElementById('circle-progress');

// Inicialización
btnIniciar.addEventListener('click', iniciarExamen);
btnAnterior.addEventListener('click', anteriorPregunta);
btnSiguiente.addEventListener('click', siguientePregunta);
btnFinalizar.addEventListener('click', calcularResultado);
btnFinalizarYa.addEventListener('click', () => {
    if (confirm("¿Estás seguro de que quieres finalizar el examen ahora? Las preguntas no respondidas contarán como incorrectas.")) {
        calcularResultado();
    }
});
btnReiniciar.addEventListener('click', () => {
    localStorage.removeItem('progreso_examen');
    location.reload();
});
btnRevisar.addEventListener('click', mostrarRevisionDetallada);

window.onload = cargarProgreso;

function guardarProgreso() {
    const estado = {
        preguntasExamen,
        indiceActual,
        respuestasUsuario
    };
    localStorage.setItem('progreso_examen', JSON.stringify(estado));
}

function cargarProgreso() {
    const guardado = localStorage.getItem('progreso_examen');
    if (guardado) {
        const estado = JSON.parse(guardado);
        preguntasExamen = estado.preguntasExamen;
        indiceActual = estado.indiceActual;
        respuestasUsuario = estado.respuestasUsuario;
        totalTexto.innerText = CONFIG.preguntasPorExamen;

        // Saltar pantalla de inicio
        pantallaInicio.classList.remove('active');
        pantallaInicio.style.display = 'none';
        pantallaExamen.style.display = 'block';
        setTimeout(() => {
            pantallaExamen.classList.add('active');
            mostrarPregunta();
        }, 50);
    }
}

function iniciarExamen() {
    preguntasExamen = mezclarPreguntasAleatoriamente([...BANCO_PREGUNTAS]).slice(0, CONFIG.preguntasPorExamen);
    indiceActual = 0;
    respuestasUsuario = new Array(CONFIG.preguntasPorExamen).fill(null);
    totalTexto.innerText = CONFIG.preguntasPorExamen;

    guardarProgreso();
    cambiarPantalla(pantallaInicio, pantallaExamen);
    mostrarPregunta();
}

function mostrarPregunta() {
    const pregunta = preguntasExamen[indiceActual];
    indicadorProgreso.innerText = `${indiceActual + 1} / ${CONFIG.preguntasPorExamen}`;
    barraProgreso.style.width = `${((indiceActual + 1) / CONFIG.preguntasPorExamen) * 100}%`;

    contenedorPregunta.innerHTML = `
        <h3 class="question-text">${escapeHTML(pregunta.pregunta).replace(/\n/g, '<br>')}</h3>
        <div class="options-list">
            ${pregunta.opciones.map((opcion, i) => `
                <div class="option ${respuestasUsuario[indiceActual] === i ? 'selected' : ''}" onclick="seleccionarRespuesta(${i})">
                    <div class="option-indicator"></div>
                    <span class="option-label">${escapeHTML(opcion)}</span>
                </div>
            `).join('')}
        </div>
    `;

    btnAnterior.style.visibility = indiceActual === 0 ? 'hidden' : 'visible';
    if (indiceActual === preguntasExamen.length - 1) {
        btnSiguiente.classList.add('hidden');
        btnFinalizarYa.classList.add('hidden');
        btnFinalizar.classList.remove('hidden');
    } else {
        btnSiguiente.classList.remove('hidden');
        btnFinalizarYa.classList.remove('hidden');
        btnFinalizar.classList.add('hidden');
    }

    contenedorPregunta.classList.remove('question-fade');
    void contenedorPregunta.offsetWidth;
    contenedorPregunta.classList.add('question-fade');
}

window.seleccionarRespuesta = function (indiceRespuesta) {
    respuestasUsuario[indiceActual] = indiceRespuesta;
    const opciones = document.querySelectorAll('.option');
    opciones.forEach((opt, i) => {
        if (i === indiceRespuesta) opt.classList.add('selected');
        else opt.classList.remove('selected');
    });
    guardarProgreso();
}

function siguientePregunta() {
    if (indiceActual < preguntasExamen.length - 1) {
        indiceActual++;
        guardarProgreso();
        mostrarPregunta();
    }
}

function anteriorPregunta() {
    if (indiceActual > 0) {
        indiceActual--;
        guardarProgreso();
        mostrarPregunta();
    }
}

function calcularResultado() {
    // Limpiar progreso al terminar
    localStorage.removeItem('progreso_examen');

    let aciertos = 0;
    preguntasExamen.forEach((pregunta, i) => {
        if (respuestasUsuario[i] === pregunta.correcta) aciertos++;
    });

    const porcentaje = Math.round((aciertos / CONFIG.preguntasPorExamen) * 100);
    aciertosTexto.innerText = aciertos;
    calificacionTexto.innerText = porcentaje;

    if (porcentaje >= 90) {
        mensajeDinamico.innerText = "Experto en Análisis Semántico";
        mensajeDinamico.style.color = "var(--success)";
    } else if (porcentaje >= 70) {
        mensajeDinamico.innerText = "Buen nivel técnico";
        mensajeDinamico.style.color = "var(--neon-blue)";
    } else {
        mensajeDinamico.innerText = "Repasa el tema de ámbitos y tipos";
        mensajeDinamico.style.color = "var(--danger)";
    }

    circleProgress.style.strokeDasharray = `${porcentaje}, 100`;
    cambiarPantalla(pantallaExamen, pantallaResultados);
}

function mostrarRevisionDetallada() {
    listaRevision.innerHTML = '';
    preguntasExamen.forEach((pregunta, i) => {
        const fueCorrecta = respuestasUsuario[i] === pregunta.correcta;
        const indiceUsuario = respuestasUsuario[i];
        const textoUsuario = indiceUsuario !== null ? pregunta.opciones[indiceUsuario] : "Sin responder";
        const textoCorrecto = pregunta.opciones[pregunta.correcta];

        const item = document.createElement('div');
        item.className = `revision-item ${fueCorrecta ? 'correct' : 'incorrect'}`;
        item.innerHTML = `
            <div class="status-tag ${fueCorrecta ? 'correct' : 'incorrect'}">
                ${fueCorrecta ? '✓ Correcta' : '✗ Incorrecta'}
            </div>
            <div class="revision-q">${i + 1}. ${escapeHTML(pregunta.pregunta).replace(/\n/g, '<br>')}</div>
            <div class="revision-ans">
                <span class="user-ans ${!fueCorrecta ? 'wrong' : ''}">Tu respuesta: ${escapeHTML(textoUsuario)}</span>
            </div>
            ${!fueCorrecta ? `
                <div class="revision-ans">
                    <span class="correct-ans">Respuesta correcta: ${escapeHTML(textoCorrecto)}</span>
                </div>
            ` : ''}
        `;
        listaRevision.appendChild(item);
    });
    contenedorRevision.classList.remove('hidden');
    btnRevisar.classList.add('hidden');
    setTimeout(() => {
        contenedorRevision.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function mezclarPreguntasAleatoriamente(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function cambiarPantalla(actual, siguiente) {
    actual.classList.remove('active');
    setTimeout(() => {
        actual.style.display = 'none';
        siguiente.style.display = 'block';
        setTimeout(() => {
            siguiente.classList.add('active');
        }, 50);
    }, 500);
}

function escapeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
