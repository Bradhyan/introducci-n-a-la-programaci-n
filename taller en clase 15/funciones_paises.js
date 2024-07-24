//Creamos arreglos que almacenen las ciudades de esos paises
var ciudades_1=new Array("", "Buenos Aires, Rosario, Cordoba, Aguas Calientes, Usuahia");
var ciudades_2=new Array("","Lima, Cuzco, Ayacuho, Puno, Nazca")
var ciudades_3=new Array("","Medellín, cali, popayan, tunja, Santa marta ")
var ciudades_4=new Array("","Santiago de Chile, Valparaiso, Puerto Mount, Antofagasta, Punta Arenas")
var ciudades_5=new Array("","Rio de Janeiro, Brasilia, Sao Pablo, Recife, Manaus")

//Crear una variable que almacene estas variables que creamos anteriormente. 
// Creamos una array pero que reconozca las variables ya que el ejercicio anterior solo reconoce número y caracteres 
var todas_ciudades = [
    [],
    ciudades_1,
    ciudades_2,
    ciudades_3,
    ciudades_4,
    ciudades_5,

]; 

function cambia_pais()
{
//Vamos a tomar los valores del select de pais 
var pais;
pais=document.formulario.pais[document.formulario.pais.selectedIndex].value;
//Necesitamos validar que la opción escogida si este definida (no sea el enunciado)
if (pais !=o){
// si se cumple la condición de que el value sea distinto de 0 entonces le enviamos las ciudades correspondientes. 
mis_ciudades=todas_ciudades[pais]
// calcular el numero de ciudades
num_ciudades=mis_ciudades.length;
//length es una propiedad de JavaScrip que permite saber el número de parámetros de un objeto
//Vamos a marcar el número de ciudades en el select 
document.formulario.ciudades.length=num_ciudades
//nosotros tenemos que separar cada ciudad por ende para cada ciudad de la arreglo le vamos agregar en el select de ciudades cada ciudad

        for (i=1;i<num_ciudades;i++)
        {
            document.formulario.ciudades.options[i].
            value=mis_ciudades[i]
            document.formulario.ciudades.options[i].text=mis_ciudades[i];
        }
    }
    else
    {
        //si no habia un pais seleccionado, elimino las ciudades del select
        document.formulario.ciudades.length=1
        //Agregar un guion en una opción.
        document.formulario.ciudades.options[o].values="-"
        document.formulario.ciudades.options[o].text="-"
    }
    document.formulario.ciudades.options[0].selected=true
}