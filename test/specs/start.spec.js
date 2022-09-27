describe('Acessar o menu forms', () => {
   it('Testar todos os campos do formulário', async () => {

      
      await $('~Forms').click()
      expect(await $('~text-input')).toBeDisplayed()
      await $('~text-input').setValue('Teste texto')
      expect(await $('~input-text-result')).toHaveText('Teste texto')
      await $('~switch').click()
      expect(await $('~switch-text')).toHaveText('Click to turn the switch OFF')
      await $('xpath://android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText').click()
      await $('id=android:id/text1').click()
     
      const element = await $('~switch-text')
      driver.touchScroll(10, 100, element)

      await $('xpath://android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup').click()




     




   });
});