import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";


const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter key={status} status={status} isActive />
            ))
          }

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>

        </View>

        <Item data={{ status: FilterStatus.DONE, description: "Café" }}
          onRemove={() => alert("Remover")}
          onStatus={() => alert("Mudar o status")}
        />
        <Item data={{ status: FilterStatus.DONE, description: "Tomate" }}
          onRemove={() => alert("Remover")}
          onStatus={() => alert("Mudar o status")}
        />
        <Item data={{ status: FilterStatus.PENDING, description: "Sabonete" }}
          onRemove={() => alert("Remover")}
          onStatus={() => alert("Mudar o status")}
        />
        <Item data={{ status: FilterStatus.PENDING, description: "Pipoca" }}
          onRemove={() => alert("Remover")}
          onStatus={() => alert("Mudar o status")}
        />
      </View>

    </View>
  )
}
