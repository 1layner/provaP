angular.module("exe", []).
controller("dado", function($scope){
 
 debugger;

 $scope.dados=[
 {caminho:'imagens/img1.jpg',mostrar: false},
  {caminho:'imagens/img2.jpg', mostrar: false},
  {caminho:'imagens/img3.jpg', mostrar: false},
  {caminho:'imagens/img4.jpg', mostrar: false},
  {caminho:'imagens/img5.jpg', mostrar: false},
  {caminho:'imagens/img6.jpg', mostrar: false}
 ];


 
            $scope.embaralharCartas=function() {

                var i = $scope.dados.length, j, tempi, tempj;
                if(i == 0) return false;
                while( --i) {
                    j = Math.floor(Math.random() * (i + 1));
                    tempi = $scope.dados[i];
                    tempj = $scope.dados[j];
                    $scope.dados[i] = tempj;
                    $scope.dados[j] = tempi;
          tempj.mostrar = true;
          return;
                } 
            }
});