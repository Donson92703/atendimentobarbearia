import Text from "./components/text";

export default function App() {
  return( 
    <div>
      <Text variant="Title-sm-bold" className="text-gray-900"> Agendar </Text>
      <Text variant="Text-md" className="text-gray-400"> Nome do cliente </Text>
      <Text variant="Text-md" className="text-gray-200"> Vincius Albuquerque </Text>
      <Text variant="Text-md" className="text-gray-400"> Olá mundo! </Text>
      <Text variant="Text-md" className="text-gray-200"> 09:00 </Text>
      <Text variant="Text-md" className="text-yellow"> 09:00 </Text>
      <Text variant="Text-md" className="text-gray-500"> 09:00 </Text>

    </div>
    
  )
}

