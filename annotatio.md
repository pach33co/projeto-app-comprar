Anotações sobre o desenvolvimento do projeto

Para criar um projeto de React Native utilizando o Expo é preciso executar o comando npx create-expo-app --template no terminal e escolher a função Blank para que a estrutura de configuração esteja em branco.

Para ficar claro a organização do projeto podemos definir que:
- Páginas e Componentes serão construidos como function
- Estilização será const 

export function App() {
    return (

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...
    }
})