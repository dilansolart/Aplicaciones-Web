# Plataforma Bancaria Créditos

Banagrario ofrece un servicio de credito de vehiculo. Banagrario requiere digitalizar este servicio para poder llegar de una forma efectiva a sus clientes y que estos en todo momento puedan conocer el estado de su credito de vehiculo. Para esto Banagrario lo contacta a usted y su equipo para el desarrollo de la plataforma para la gestión del servicio de credito de vehiculo.

Los tipos de usuarios que debe manejar el sistema son administrador, cliente y usuario interno.

Para acceder a los productos ofrecidos por el banco, el cliente deberá ingresar en la plataforma suministrando los siguientes datos:

- Nombre completo.
- Tipo de documento de identidad (Cédula de ciudadanía, pasaporte o cédula de extranjería)
- Número de identificación.
- Fecha de nacimiento.
- Fecha de expedición del documento.
- Valor de ingresos
- Valor de egresos

Una vez creado el usuario de acceso a la plataforma bancaria el cliente tendrá la posibilidad de:
- Solicitar un credito de vehiculo, indicando el valor solicitado, el tiempo en meses en el que desea cancelar la deuda. 
- Generar un historial de pagos de un producto.
- Solicitar prórroga en el pago de alguno de sus productos indicando la razón y la cantidad de cuotas que desea aplazar. Esta cantidad de cuotas no podrá ser mayor al 25% de la cantidad de cuotas restantes. El máximo de cuotas que se permite aplazar es de 6.
- Generar un certificado donde se relacione el número de cuotas pagadas, el número de cuotas pendientes por pagar, el valor de la cuota discriminando la cantidad pagada por intereses y por capital.
- Simular el pago de una cuota de un crédito previamente aprobado.

Un usuario interno de la plataforma debe ser registrado por un administrador y debe estar en la capacidad de:
- Aprobar o rechazar las solicitudes de créditos de los clientes. En caso de ser aprobado se debe indicar el valor aprobado y la tasa de intereses mensual.
- Aprobar o rechazar solicitudes de prórroga en las cuotas crediticias.
- Generar la cantidad de créditos vigentes.
- Generar el historial de pagos de un cliente.

### Requerimientos del sistema:
- Al aprobar un crédito el sistema debe calcular y notificar al solicitante del crédito el valor de las cuotas, la cual es variable y se calcula de la siguiente forma:
    * valor_capital = monto_aprobado / numero_cuotas
    * deuda_total = valor_solicitado - valor_capital (Este valor no puede ser negativo)
    * valor_interes = %interes_mensual * deuda_total
    * valor_cuota = valor_intereses + valor_capital 
- Un crédito se rechaza cuando el valor de una cuota excede el 30% del valor disponible de una persona.
    * valor_disponible = egresos / ingresos * 100%

Un administrador se encarga de gestionar los usuarios internos y además ejerce control total de la plataforma.

---------
### Notas:
- Los datos suministrados por los usuarios deben cumplir la política de privacidad de datos vigente, es decir las contraseñas de los usuarios deben almacenarse de forma cifrada y la conexión al servidor debe realizarse de forma segura.
- La base de datos debe ser no relacional.
- Se debe utilizar una arquitectura desacoplada, es decir, una API back end y un front end que consuma dicha API.
- La API back end debe estar desarrollada en Express.js
- El front end debe estar desarrollado en React.js
- Se debe utilizar Bootstrap como librería CSS  para manejar los estilos de su aplicación.