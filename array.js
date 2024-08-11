var racaDeGato = ['Persa', 'Siamês', 'Maine Coon', 'Angorá', 'Sphynx', 'Ragdoll', 'Ashera', 'American Short Hair']
//.push adiciona item ao final do array
racaDeGato.push('Exótico')
racaDeGato.push('SRD')
console.log(racaDeGato)
//.pop tira o ultimo item do array
racaDeGato.pop()
console.log(racaDeGato)
//.shift tira o primeiro item do array
racaDeGato.shift()
console.log(racaDeGato)
//.unshift adiciona item ao inicio do array
racaDeGato.unshift('Himalaio')
console.log(racaDeGato)
console.log(racaDeGato.indexOf('Maine Coon'))
racaDeGato.splice(3,1)
console.log(racaDeGato)
console.log(racaDeGato.slice())