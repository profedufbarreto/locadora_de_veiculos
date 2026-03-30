/**
 * Service to fetch address information from ViaCEP API
 * @param {string} cep - The postal code (CEP) to search for
 * @returns {Promise<object>} - Address data or error
 */
export const fetchAddressByCep = async (cep) => {
  const sanitizedCep = cep.replace(/\D/g, '');
  
  if (sanitizedCep.length !== 8) {
    throw new Error('CEP inválido. Deve conter 8 dígitos.');
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`);
    const data = await response.json();

    if (data.erro) {
      throw new Error('CEP não encontrado.');
    }

    return {
      street: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    };
  } catch (error) {
    console.error('Erro ao buscar CEP:', error);
    throw error;
  }
};
