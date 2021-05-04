describe('calcular', function(){
    it('deve somar 10+10', function(){
        var calculo = new calcular();
        calculo.add([10,10]);
        expect(calculo.add()).toEqual(20)
    })
});//não funciona :')