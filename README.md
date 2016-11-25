# routerAppNativescript

# arquitectura de carpetas

/
    app => desarrollar
    hooks => livesync
    node_modules => dependencias 
    platforms => android / iOS
    package.json => configuracion de las dependencias
    references.d.ts => mapa
    tsconfig.json => config typescript


    /App_Resources => 
        /Android => 
            Manifest => configuracion app 
            app.gradle => config pluggins

            drawable => tamaños resources 
            /values => xml configuracion 
            

        /iOS =>
            / Assets.x => resources 
            files => no tocar

        
    files => programacion y configuracion 
    /css => .css styles


    tns create NombreApp --ng

apk => MyNgApp/platforms/android/build/outputs/apk

    
    tns run ios/android --emulator

    tns livesync ios/android
    
    


# Comandos del CLI
tns =>

create <nombreApp> /path/ --appid com.jorgeucano.myApp --copy-from 
        --template github --ng --tsc

tns init 

platform 
    list
    add <Plataforma>
    remove <plataforma>
    update <platforma>
    prepare <plataforma>

build <plataforma>
emulate <plataforma>

deploy <plataforma> --device 192.123.2.1 

run <plataforma>
livesync <plataforma>

test init
test <plataforma>
device
device log 

doctor 


