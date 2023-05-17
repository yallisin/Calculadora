function criaCalculadora(){
    return {
      display: document.querySelector('.display'),
      

      
      inicia() {
        this.cliqueBotoes();
        this.pressionaEnter();
        this.pressionaDel();
    },

    pressionaEnter() {
        this.display.addEventListener('keyup', e => {
            if(e.keycode === 13) {
                this.realizaConta();
            }
        });

        
    },

    pressionaDel() {
        this.display.addEventListener('keypress', e => {
        console.log(e);
        });
    },

    realizaConta() {
        let conta = this.display.value;

        try {
            conta = eval(conta);
        
        if (!conta) {
            alert('Conta inválida');
            return;
        }

        this.display.value = String(conta);
    }
        catch(e) {
            alert('Conta inválida');
            return;
        }
    
    },
      clearDisplay() {
        this.display.value= '';
      },

       deleteOne() {
        this.display.value = this.display.value.slice(0, -1);
       },


        cliqueBotoes() {
            document.addEventListener('click', (e) =>  {
             const el = e.target;

             if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText)
             }

             if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
             }

             if(el.classList.contains('btn-del')){
                this.deleteOne();
             }

             if(el.classList.contains('btn-eq')) {
                this.realizaConta();
             }
            });
        },

        btnParaDisplay(valor) {
           this.display.value += valor;
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();