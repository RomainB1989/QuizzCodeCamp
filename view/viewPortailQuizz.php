<main>
        <h2>Portail Quizz</h2>
        <div id="containerPortail">
            <table>
                <tr>
                    <td>
                        <div class="button r" id="button-4">
                            <input type="checkbox" class="checkbox"/>
                            <div class="knobs"></div>
                            <div class="layer"></div>
                        </div>
                    </td>
                    <td> JS Quizz niveau 1</td>
                    <td> 01/01/2025 </td> 
                    <td> Ian Malcolm </td>
                    <td><a href="" class="deroulant"><img src="./source/images/chevron-down.svg" alt="fleche" width="30px" height="auto" class="flecheBas"> <img src="./source/images/chevron-up.svg" alt="flecheHaut" width="30px" height="auto" class="flecheHaut"></a></td>
                </tr>
            </table>
            <form class="menuD" method="post" action="">
                <table>
                    <tr>
                        <td colspan="4"> 
                            <input type="text" name="titre" placeholder="Titre du quizz">
                    </tr>
                    <tr>
                        <td colspan="4">
                            <label for="photoQuizz" class="custom-file">Photo du quizz</label>
                            <input type="file" id="photoQuizz" accept=".png, .jpg" name="image">
                            <div id="previewContainer">
                                <img src="" alt="Votre photo" id="previewPhoto">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        
                        <td colspan="4">
                        <label for="description">Description du quizz</label><textarea name="description" id="description"></textarea></td>
                    </tr>
                    <tr>
                        <td colspan="4"><input type="text" name="question[]" placeholder="Question"></td>
                    </tr>

                        <td><input type="text" name="reponse[]" placeholder="Réponse"></td>
                        <td><input type="text" name="reponse[]" placeholder="Réponse"></td>
                        <td><input type="text" name="reponse[]" placeholder="Réponse"></td>
                        <td><input type="text" name="reponse[]" placeholder="Réponse"></td>
                        <p><?php echo $message ?></p>
                        <td><button type="submit" name="quizzSubmit" value="envoyer">Valider le quizz</button></td>
                    </tr>
                    <tr>
                        <td colspan="4"><input type="text" placeholder="Question"></td>
                    </tr>
                    <tr>
                        <td><input type="text"name="reponse[]" placeholder="reponse"></td>
                        <td><input type="text"name="reponse[]" placeholder="reponse"></td>
                        <td><input type="text"name="reponse[]" placeholder="reponse"></td>
                        <td><input type="text"name="reponse[]" placeholder="reponse"></td>
                    </tr>
                    <tr>
                        <td colspan="4"><input type="text" placeholder="Question"></td>
                    </tr>
                    <tr>                        
                        <td><input type="text"name="reponse[]" placeholder="reponse"></td>
                        <td><input type="text"name="reponse[]" placeholder="reponse"></td>
                        <td><input type="text"name="reponse[]" placeholder="reponse"></td>
                        <td><input type="text"name="reponse[]" placeholder="reponse"></td>
                    </tr>
                </table>
            </form>
            <table>
                <tr>
                    <td>
                        <div class="button r" id="button-4">
                            <input type="checkbox" class="checkbox"/>
                            <div class="knobs"></div>
                            <div class="layer"></div>
                        </div>
                    </td>
                    <td> JS Quizz niveau 1</td>
                    <td> 01/01/2025 </td> 
                    <td> Ian Malcolm </td>
                    <td><a href="" class="deroulant"><img src="./source/images/chevron-down.svg" alt="fleche" width="30px" height="auto"></a></td>
                </tr>
            </table>
            <table>
                <tr>
                    <td>
                        <div class="button r" id="button-4">
                            <input type="checkbox" class="checkbox"/>
                            <div class="knobs"></div>
                            <div class="layer"></div>
                        </div>
                    </td>
                    <td> JS Quizz niveau 1</td>
                    <td> 01/01/2025 </td> 
                    <td> Ian Malcolm </td>
                    <td><a href="" class="deroulant"><img src="./source/images/chevron-down.svg" alt="fleche" width="30px" height="auto"></a></td>
                </tr>
            </table>
            <table>
                <tr>
                    <td>
                        <div class="button r" id="button-4">
                            <input type="checkbox" class="checkbox"/>
                            <div class="knobs"></div>
                            <div class="layer"></div>
                        </div>
                    </td>
                    <td> JS Quizz niveau 1</td>
                    <td> 01/01/2025 </td> 
                    <td> Ian Malcolm </td>
                    <td><a href="" class="deroulant"><img src="./source/images/chevron-down.svg" alt="fleche" width="30px" height="auto"></a></td>
                </tr>
            </table>
        </div>
    </main>