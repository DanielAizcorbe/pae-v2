<div style="text-align:center;" center>
    <h1>P.A.E</h1>
    <img 
        src="public/banner.svg"
        alt="banner"
        height="128"
    />
    <p style="padding: 1rem;">Software para atención de enfermería</p>
</div>
<hr/>

### ¿Qué es PAE?
El proceso de atención de enfermería consiste en las prácticas realizadas por los enfermeros a la hora de ingreso de un paciente al servicio.

Este proceso se realiza de forma manual, mediante planillas, donde se describen algunos casos generales, y luego el enfermero se explaya escribiendo el proceso completo.

### Etapas del PAE

Este proceso consta de 5 etapas:
* **Valoración**: se obtiene información del paciente mediante exploraciones físicas y observaciones, para detectar las necesidades del paciente.
* **Diagnóstico**: En base a los datos recopilados, se detectan los problemas reales o potenciales que el paciente presenta.
* **Planeación**: Se desarrollan planes de cuidado para cada diagnóstico, priorizándolos según su urgencia y tratamiento
* **Ejecución**: Se ponen en práctica las intervenciones planificadas en el plan de cuidado.
* **Evaluación**: Se valora la efectividad del plan de cuidado y el logro de los objetivos establecidos.

### Problemas del proceso

El uso de planillas físicas hace que la integración de esta información a los sistemas informáticos sea más rústica, como PDFs o imágenes escaneadas de las mismas, llegando incluso a omitirla para la toma de decisiones.

Además, al ser documentos físicos, tanto su elaboración, como su almacenamiento requiere un esfuerzo extra por parte del personal de salud.

### Nuestra propuesta

Junto con algunos enfermeros, preparamos un sistema que intenta resolver los dos puntos anteriores.
Una app que permita registrar y evolucionar pacientes de forma simple, rápida e intuitiva.

### Funcionalidades de la App

La versión actual incluye:
* **Registro de pacientes**, mediante nombre completo y fecha de nacimiento, como indica el standar de la [JCI](https://www.jointcommissioninternational.org/)
* **Evolución de pacientes**: registro de las 5 etapas del PAE
* **Mapa mental para las prácticas**: tanto en la valoración, como en la ejecución, es preciso saber en que parte del cuerpo fueron realizadas las distintas prácticas médicas, las cuales son marcadas en una imagen del cuerpo completo y guardadas para agilizar el cambio de guardia.
* **Captura de tiempo para cada práctica**: al iniciar una práctica, existe la opción de que la app registre cuanto tiempo lleva completarla, o directamente ingresar esa información.
* **Copiar texto para informes**: Al finalizar la información, se copia al portapapeles todo el informe realizado, sin incluir las imágenes.
